import LOGO from '../logo.png';
import Searchbar from './searchbar';

function Navbar(){
    return(
        <>
        <div id='main-nav'>
            <div className='Logo'>
            <img style={{height:'50px'}} src={LOGO} alt="logo"/>
               <h1>gomart</h1>
            </div>
        <div  className='nav-bar'>
            <p className="hover-underline-animation">Home</p>
            <p className="hover-underline-animation">About</p>
            <p className="hover-underline-animation">Products</p>
            <p className="hover-underline-animation">Login</p>
            <Searchbar />
        </div>
        </div>
        </>
    );
}

export default Navbar;