import { NavLink } from "react-router-dom";


const NavBar = () => {

    const NavList = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Informazioni",
            url: "/Information",
        },
        {
            title: "Posts",
            url: "/Posts",
        },
                {
            title: "New Posts",
            url: "/Posts/NewPost",
        }
    ];

       return (
        <header>
            
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container"> 

                    <NavLink className="navbar-brand" to='/'>
                        Nome del Brand
                    </NavLink>

                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto"> 
                            {NavList.map((curLink, index) => (
                                <li key={index} className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to={curLink.url}
                                        end 
                                    >
                                        {curLink.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default NavBar;