const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return errorRes(res, 404, "please provide all input field");
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return errorRes(res, 404, "User already exist!");
        }

        user = await User.create({
            name,
            email,
            password,
        });

        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user
        });
    } catch (error) {
        errorRes(res, 500, error.message);
    }
};

exports.login = async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return errorRes(res, 404, "Please input all field");
    }

    try {

        const user = await User.findOne({email})

        if (!user) {
            return errorRes(res, 404, "Invalid credential");
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return errorRes(res, 404, "Invalid credential");
        }

        const token = jwt.sign({id:user._id},process.env.SECRET_TOKEN);

        res.cookie('verify',token,{
            expires: new Date(Date.now() + 864000000),
            httpOnly:false
        })

        res.status(200).json({
            success:true
        })

    } catch (error) {
        errorRes(res, 500, error.message);
    }
};

exports.getuser = async (req,res,next)=>{
    try{
        const {token} = req.body;
        // const token = req.cookies.verify;
        
        if(!token){
            return errorRes(res,404,"Not login yet..");
        }
    
        const verifyToken = jwt.verify(token,process.env.SECRET_TOKEN);
    
        if(!verifyToken){
            return errorRes(res,500,"Error Occurred");
        }
    
        const rootUser = await User.findOne({_id:verifyToken.id});
    
        if(!rootUser){
            return errorRes(res,500,"Error Occurred");
        }
    
        res.status(201).json({
            success:true,
            rootUser
        })
    } catch(e){
        return errorRes(res,500,"Error Occurred");
    }
    
}

const errorRes = (res, statusCode, message) => {
    return res.status(statusCode).json({
        success: false,
        message,
    });
};
