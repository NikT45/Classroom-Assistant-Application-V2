import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav: React.FC<{}> = () => {
    return(
        <nav className={styles.navbar}>
            <Link to="/App"><button>Home</button></Link>
            <Link to="/groups"><button>Groups</button></Link>
            <Link to="/selection"><button>Selection</button></Link>
            <Link to="/grades"><button>Grades</button></Link>
            <Link to="/calendar"><button>Calendar</button></Link>
            <Link to="/classes"><button>Classes</button></Link>
        </nav>
    )
}

export default Nav;