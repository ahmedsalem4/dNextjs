import NavBar from '../components/NavBar';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <div>
    <NavBar>
    
    <Component {...pageProps} />
    </NavBar>
    </div>
  ) 
}

export default MyApp
