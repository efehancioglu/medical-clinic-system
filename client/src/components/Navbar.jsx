import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
            <Link to='/' style={{ marginRight: '10px' }} >Homepage</Link>
            <Link to='/login' style={{ marginRight: '10px' }} >Login</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </nav>
    )
}

export default Navbar;