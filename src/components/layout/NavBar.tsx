import { Link } from "react-router";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";

const NavBar = () => {
    const navigate = useNavigate();
    const [isMobileDropdownVisible, setIsMobileDropdownVisible] = useState(false);

    return (
        <motion.header 
            className="bg-secondary w-[95%] lg:w-9/10 max-w-7xl mx-auto my-2 h-18 sticky top-2 border-2 border-text-primary/15 rounded-3xl shadow-lg shadow-text-primary/2 z-50 flex items-center"
            initial={{y: 10, opacity: 0.2}}
            animate={{y: 0, opacity: 1}}
            transition={{ ease: "easeInOut", duration: 0.3 }}
        >
            <nav className="h-full w-full flex px-4 justify-between items-center relative">
                <h1 
                    className="text-text-primary font-semibold text-lg md:text-xl cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    GitHub Explorer
                </h1>

                <ul className="hidden lg:flex items-center gap-8">
                    <li className="text-text-primary font-medium hover:text-blue-light duration-200">
                        <Link to={"/"}> Home </Link>
                    </li>

                    <li className="text-text-primary font-medium hover:text-blue-light duration-200">
                        <Link to={"/explore"}> Explore </Link>
                    </li>
                </ul>

                <div className="lg:hidden flex items-center">
                    <button 
                        className="text-text-primary/90 text-2xl"
                        onClick={() => setIsMobileDropdownVisible(prevState => !prevState)}
                    >
                        {isMobileDropdownVisible ? <IoCloseOutline /> : <IoMenu />}
                    </button>

                    {/* Mobile dropdown */}
                    {
                        isMobileDropdownVisible && 
                        (
                            <ul className="bg-secondary absolute right-0 top-20 w-3/5 max-w-100 py-10 px-6 rounded-3xl border-2 border-text-primary/15 z-50 flex flex-col gap-4">
                                <li className="text-text-primary/90 font-medium ">
                                    <Link to={"/"}> Home </Link>
                                </li>

                                <li className="text-text-primary/90 font-medium ">
                                    <Link to={"/explore"}> Explore </Link>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
        </motion.header>
    )
}

export default NavBar;