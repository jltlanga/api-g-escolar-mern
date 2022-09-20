import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'
// import View from './View';
// import {AiFillHome} from 'react-icons/ai';

const Sidebar = () => {
    const [show, setShow] = useState(false);
    return (
        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
                </div>
            </header>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <div className="brand-name">
                    {/* <h1>GESTÃO ESCOLAR</h1> */}
                </div>
                <nav className='nav'>
                    {/* Links para as routas */}
                    <div className='logos-sidebar'>
                        <Link to='/' className='nav-logo'><span></span></Link>
                        <Link to='/turmas' className='nav-link'><img src="imgs/image 3.svg" alt="" />&nbsp;&nbsp;<span>TURMAS</span> </Link>
                        <Link to='/view/:id' className='nav-link'><img src="imgs/image 4.svg" alt="" />&nbsp;&nbsp;<span>ESTUDANTES</span> </Link>
                        <Link to='/professor' className='nav-link'><img src="imgs/pngwing 1.svg" alt="" />&nbsp;&nbsp;<span>PROFESSORES</span> </Link>
                    </div>
                </nav>
            </aside>
            {/* <h1>Content</h1> */}
        </main>
    )
}

export default Sidebar;