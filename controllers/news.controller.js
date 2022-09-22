const {News} = require('../models/news.model');


const createNews = async(req,res)=>{
  
try {

    const news = new News({...req.body });
    
    
   if (req.file) {
  
    news.image = req.file.filename;
  }
  
  
  await news.save();
  
  res.json(news)
  
  } catch (error) {
    
    console.log(error);
  
  }


}



const deleteNewsById = async(req,res)=>{
    
    try {
        
        const {id} = req.params; 

        await News.deleteOne({_id:id});


    } catch (error) {
        
        console.log(error);
        res.status(500).end();
    }

}


const getAllNews = async(req,res)=>{ 

   try {


    const news = await News.find();

    res.status(200).json(news);   

   } catch (error) {
    
    console.log(error);
    res.status(500).end();
   }


 }

const getNewsById = async(req,res)=>{


    try {
        
       const news = News.findById(req.params.id);

       res.status(200).json(news);


    } catch (error) {

        console.log(error);
        res.status(500).end();
        
    }


 } 


module.exports = { createNews,deleteNewsById,getAllNews,getNewsById};