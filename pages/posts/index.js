import Link from "next/link";


function Posts( props){
  const data = props.posts;
  console.log(data);
    return(
      <div>
        
        {
          data.map((el,i)=>{
            return (
              <div key={el.id}>
                <h3><Link href={`posts/${el.id}`}>{el.title}</Link></h3>
                <p>{el.body}</p> 
                <hr/>
              </div>
            )
          })
        }
        
      </div>
    )
  }
  export default Posts

  export async function getStaticProps(){
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();

    return {
      props:{
        posts :data
      }
    }
  }