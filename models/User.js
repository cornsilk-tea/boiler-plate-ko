const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,//입력문자 중간에 스페이스 없애줌
        unique:1//똑같은 이매일 사용 못하게
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{//역할부여
        type:Number,
        defalt:0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{//토큰 유효기간
        type:Number

    }

})

const User = mongoose.model('User', userSchema)

module.exports = {User}