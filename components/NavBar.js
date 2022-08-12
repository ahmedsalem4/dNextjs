import Link from "next/link"
import NavStyle from "../styles/NavBar.module.css";
const NavBar  = (props)=>{

    return(
            <>
            <ul className={NavStyle.ul}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/posts">posts</Link></li>
            </ul>
            {props.children}
            <h1>Footer</h1>
            </>
    )
}

export default NavBar 