const {User} = require('../models/user.model');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');   



const register = async(req,res)=>{

  
try {
   
    const user = new User({ ...req.body, });
            
    const {password} = req.body;

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(password, salt);

    user.password = hashedPassword;


     await user.save(); 
     
     res.status(201).send(user);



} catch (error) {
    
    console.log(error);
    res.status(500).send(error);

}


}



const login = async(req,res)=>{

    let user ;
    
    try{

        const {email,password} = req.body;
     
         user = await User.findOne({ email: email});

        console.log(user.email);
    
        if(user){
    
    
          const verif = bcrypt.compareSync(password, user.password);
    
          if(verif === false) return res.status(403).send('Invalid password');
          
          const token = jwt.sign({email:email},process.env.ACCESS_TOKEN);
       
           res.status(200).json({user:user,token:token});
    
          
    
        }else {
    
    
          res.status(404).json({message:"user not found"});

        }
    
    
    }catch(error){

       console.log(error);
       res.status(500).send(error);

    }





}


const getUserById = async(req, res)=>{ 


    try {

        const user = await User.findById(req.params.id);  

        res.status(200).json(user);
        
    } catch (error) {
        console.log(error);
       res.status(500).send(error);
    }

    
}



module.exports = { register,login,getUserById}