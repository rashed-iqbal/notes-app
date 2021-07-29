const {Schema,model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    notes:[
        {
            title:String,
            desc:String,
            createdAt:Date,
            UpdatedAt:Date,
            folders:Array
        }
    ]
})

UserSchema.pre("save",function (next) {
    this.password = bcrypt.hashSync(this.password,10);
    next()
})


module.exports = model("User",UserSchema);

