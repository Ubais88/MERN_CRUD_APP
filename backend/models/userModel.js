const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:'string',
        required: true,
    },
    email:{
        type:'string',
        unique: true,
        required: true
    },
    age:{
        type:'number',

    }
},
 {timestamps:true}
)
 

const User = mongoose.model('User', userSchema)

module.exports = User;