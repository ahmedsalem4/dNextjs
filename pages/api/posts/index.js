import {posts} from "../../../ahmed/posts";
 function handlerPosts(req, res) {

    res.status(200).json(posts)
  
     
        

  }
  
  export default handlerPosts