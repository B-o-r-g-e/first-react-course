import {Link} from "react-router-dom";


function Header() {
    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/create'>New Blog</Link></li>
                    {/*<li><Link to='#'>Services</Link></li>*/}
                    {/*<li><Link to='#'>Contact</Link></li>*/}
                </ul>
            </nav>
            <hr/>
        </header>
    )
}

export default Header