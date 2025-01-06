import               "../index.css";
import React    from "react";
import { Link } from "react-router-dom";

const TopBar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 right-0 h-16 bg-black bg-opacity-0 backdrop-blur-md flex items-center justify-center px-8 z-10 josefin-sans border-b border-zinc-900 border-opacity-60">
            <div className="flex space-x-8">
                <Link to="/home">
                    <button className="flex items-center text-white hover:italic transition font-bold">
                        Home
                    </button>
                </Link>

                <Link to="/projects">
                    <button className="flex items-center text-white hover:italic transition font-bold">
                        Projects
                    </button>
                </Link>

                <Link to="/socials">
                    <button className="flex items-center text-white hover:italic transition font-bold">
                        Socials
                    </button>
                </Link>
            </div>

            <div className="absolute right-8 text-white glow-text">
                Angel, 3/11/23 ✨
            </div>
        </div>
    );
};

export default TopBar;