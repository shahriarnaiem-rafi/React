import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
          <NavLink to="/" className=""> Home</NavLink>  
          <NavLink to="/blog" className=""> Blog</NavLink>  
          <NavLink to="/" className=""> Contact</NavLink>  
          <NavLink to="/" className=""> About</NavLink>  
        </nav>
    );
};

export default Navbar;