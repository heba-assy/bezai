import './Navbar.css';
import React from 'react';
import { Link} from 'react-router-dom'
class Navbar extends React.Component{
    render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-bar-styling">
                <Link  className="navbar-brand" to="/" style={{fontSize: 26}}>Bezai <i class="fas fa-paw"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul classNameName="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts">Shop</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
        );
    }
}
export default Navbar;