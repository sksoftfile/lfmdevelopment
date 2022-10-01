const db = require('../models');

class UserController{

	constructor(){
		//
	}

async AddCustomer(req,res){
		
var {fname,lname,password,email,mobile,password,address,city,state,zipCode,addressTwo,memberSince,renewalDate,etc} = req.body;

		if(!fname  || !email || !password || !mobile)
			return res.json({status:false,message:'fname, email, password,  and mobile are required!',data:[]});

		//var pass = await db.config.setPassword(password);

		var customer = new db.Customer;
		customer.firstName  = fname;
		customer.lastName = lname;
		customer.email = email;
		customer.password = password;
		customer.address = address;
		customer.city = city;
		customer.state = state;
		customer.zipCode = zipCode;
		customer.addressTwo = addressTwo;
		customer.memberSince = memberSince;
		customer.renewalDate = renewalDate;
		customer.etc = etc
      	try{
			customer.save(err=>{
				return res.json({status:true,message:'Custmer adder',data:customer});
			});
		}catch(err){
			return res.json({status:false,message:`server error`,data:`${err}`});
		}
		
	 }

	
	
	}// end of class loop 


 module.exports = UserController;


