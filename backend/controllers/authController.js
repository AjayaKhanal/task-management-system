const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}

const registerUser = async(req, res)=>{
    const {name, email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        return res.status(400).json({message: 'User already exists'})
    }

    const user = await User.create({
        name,
        email,
        password
    })
    
    if(user){
        res.status(201).json({
            _id: user,id,
            name:user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({message: 'Invalid user data'})
    }
}

const loginUser = async(req, res) =>{
    const {email, password} = req.body
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({message: 'Invalid credentials'})
    }
}

const getMe = async(req, res)=>{
    const{_id, name, email} = req.user
    res.json({
        id:_id,
        name,
        email
    })
}

module.exports = {registerUser, loginUser, getMe}