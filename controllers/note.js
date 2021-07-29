const User = require('../models/User');

exports.createNote = async (req,res,next) =>{
    const {userId,title,desc} = req.body;

    if(!title){
        return errorRes(res,404,"Please input type field")
    }

    try {

        const user = await User.findById(userId);

        if(!user){
            errorRes(res,404,"User not found")
        }
        let obj = {
            title,
            desc,
            createTime:Date.now()
        }

        user.notes = [...user.notes,obj];

        
        await User.updateOne({_id:user.id},{$set:user});

        res.status(200).json({
            success:true,
            message:"Note created successfully",
            user
        })
        
    } catch (error) {
        errorRes(res,500,error.message)
    }
}

exports.updateNote = async (req,res,next) =>{
    const {userId,noteId,title,desc} = req.body;
    if(!userId || !noteId){
        errorRes(res,404,"Please input all field")
    }

    try {

        const user = await User.findOne({_id:userId,"notes._id":noteId});

        let note = user.notes.find(v=>v._id==noteId);

        if(!note){
            errorRes(res,404,"Note not found")
        }

        note.title = title || note.title;
        note.desc = desc || note.desc

        await User.updateOne({_id:user.id},{$set:user});

        res.status(200).json({
            success:true,
            message:"Note created successfully",
            user
        })
        
    } catch (error) {
        errorRes(res,500,error.message)
    }
}

exports.deleteNote = async (req,res,next) =>{
    const {userId,noteId} = req.body
    if(!userId || !noteId){
        errorRes(res,404,"Please input all field")
    }

    try {

        const user = await User.findOne({_id:userId,"notes._id":noteId});
        if(!user){
            errorRes(res,404,"not found")
        }
        user.notes = user.notes.filter(v=>v._id!=noteId);

        await User.updateOne({_id:user.id},{$set:user});

        res.status(200).json({
            success:true,
            message:"Note created successfully",
            user
        })
        
    } catch (error) {
        errorRes(res,500,error.message)
    }
}

const errorRes = (res, statusCode, message) => {
    return res.status(statusCode).json({
        success: false,
        message,
    });
};
