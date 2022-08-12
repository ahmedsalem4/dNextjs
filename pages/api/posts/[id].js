import {posts} from "../../../ahmed/posts"; 

function handlerPosts(req, res) {

   let id = req.query.id;

   let post = posts.filter( (e) =>{
       return e.id  == id;
   })

   if(post){
       res.status(200).json(post);
   }else{
       res.status(400).json({error: "Sorry this Not Found"});
   } 
   
 }
 
 export default handlerPosts
