const {Schema,model} = require('mongoose');

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: { type: Number, required: true, index:{unique: true}},
    email: { type: String,default:'',index:{unique: true}},
    username: { type: String, default:''},
    password: { type: String,required:true},    
    profile: { type: String,default:''},
    type: { type: Number,default:1},
    address:{type: String,default:''}, 
    street:{type: String,default:''} , 
    city:{type: String,default:''},
    State:{type: String,default:''},
    zipCode:{type: String,default:''},
    addressTwo:{ type: String,default:'' } ,
    signUpDate : { type: Number,default:Date.now()},
    memberSince:{ type: Number,default:0},
    renewalDate:{ type: Number,default:0},
    etc:{ type: String,default:''},
    isActive:{ type: Number,default:1},

},{ timestamps: true });

module.exports = model('customer', schema);
