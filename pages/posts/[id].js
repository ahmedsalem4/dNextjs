

function post(props){

    let posts =  props.post;
    let allPosts =  posts.map((el) =>{
      return(
        <div key={el.id}>
          
          <h3>{el.title}</h3>
          <p>{el.body}</p>
        </div>
      )
    })
     
      return(
        <div>
          
         {allPosts}
    
        </div>
      )
    }
    export default post
  
  
      export async function getStaticPaths(){
  
        const res = await fetch("http://localhost:3000/api/posts");
        const data = await res.json();
  
        const paths = data.map(el =>{
          return{
            params : { id: `${el.id}` }
          }
        });
        
        return {
            paths : paths,
            fallback : false,
          }
      }
  
  
    export async function getStaticProps(context){
     
      
      const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`);
      const data = await res.json();
      
      return {
       
        props:{
          post: data
        }
      }
    }
  
  
  