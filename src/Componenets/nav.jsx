import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from 'react';
import { RiMenu2Line } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from '@clerk/clerk-react';
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { MdOutlineLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";



function Nav() {

    const favoriteItems = useSelector((state) => state.products.favorites);
    const [click, setClick] = useState(false);
    const [theme, setTheme] = useState(false);


    useEffect(() => {

        if (theme == true) {
            document.body.classList.add('light');
        }

        else {
            document.body.classList.remove('light');
        }
    }, [theme])



    const handleClick = () => {
        setTheme(!theme);
    }



    return (
        <nav>
            <div className="navContainer">


                <div className="logo">
                    {/* <Link to={'/'}><span>FOOD RECIPES</span></Link> */}
                    <NavLink to={'/'}><span>FOOD RECIPES</span></NavLink>
                </div>



                <div className={`navlinksathourPernet ${click ? 'active' : ''}`}>

                    <div className='navlinks'>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "active-link" : ""}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/categories"
                                    className={({ isActive }) => isActive ? "active-link" : ""}
                                >
                                    Categories
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/recipes"
                                    className={({ isActive }) => isActive ? "active-link" : ""}
                                >
                                    Recipes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/favorites"
                                    className={({ isActive }) => isActive ? "active-link favorites-link" : "favorites-link"}
                                    style={{ display: 'flex', alignItems: 'center', gap: '1px' }}
                                >
                                    <FaHeart color="red" style={{ marginRight: "5px" }} />
                                    Favorites
                                    <span className="badge">{favoriteItems.length}</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>


                <div className='athour'>
                    <div className="themeIcon">
                        {theme ? <MdOutlineLightMode onClick={handleClick} style={{ fontSize: '2rem' }} /> : <DarkModeIcon onClick={handleClick} style={{ fontSize: '2rem' }} />}
                    </div>



                    <div className="sinupbtn flex items-center gap-3">
                        <SignedOut>
                            <SignUpButton>
                                <button className="btn">Sign Up</button>
                            </SignUpButton>
                        </SignedOut>

                        <SignedIn>
                            <div className="user-wrapper">
                                <UserButton
                                    appearance={{
                                        elements: {
                                            userButtonBox: "bg-[#6c47ff] rounded-full h-12 w-12 flex items-center justify-center text-xl",
                                        },
                                    }}
                                />

                            </div>
                        </SignedIn>
                    </div>


                </div>


                <div className="menuIcon" onClick={() => setClick(!click)}>
                    {click ? <HiOutlineMenuAlt3 /> : <RiMenu2Line />}
                </div>

            </div>
        </nav>
    );
}

export default Nav;
