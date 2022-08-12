import Link from "next/link"
import NavStyle from "../styles/NavBar.module.css";
const NavBar  = (props)=>{

    return(
            <div>
            <ul className={NavStyle.uly}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/posts">posts</Link></li>
            </ul>
            {props.children}
            <h1>Footer</h1>
            </div>
    )
}

export default NavBar 