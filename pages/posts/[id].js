

function post(props){

      return(
        <div>
          
        <h1>{props.post.id}</h1>
        <h3>{props.post.title}</h3>
        <p>{props.post.body}</p>
    
        </div>
      )
    }
    export default post
  
  
      export async function getStaticPaths(){
  
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
     
      
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
      const data = await res.json();
      
      return {
       
        props:{
          post: data
        }
      }
    }
  
  
  