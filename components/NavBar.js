"use client"
import { useRouter } from "next/navigation";

const Navbar = ({text}) => {
    // Add more routes as needed
    const routeMap = {
        "posts": "/posts",
        "home": "/",
    }
    const router = useRouter();
    return (
        <nav className="flex p-5 justify-between items-center">
            <div href="/" className="flex items-center logo group">
                {/* SVG Logo */}
                <svg width="84" height="15" viewBox="0 0 84 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line 
                        x1="9.5" y1="9.5" x2="50.5" y2="9.5"
                        stroke="black" strokeWidth="19"
                        strokeLinecap="round" 
                    />
                    <circle 
                        cx="74.5" cy="9.5" r="4" 
                        fill="gray" stroke="gray" strokeWidth="4" 
                        className="transition-colors duration-500 ease-in-out group-hover:fill-green-500 group-hover:stroke-green-500"
                    />
                </svg>
            </div>

            <div className="items">
                <ul className="flex space-x-4">
                    <li>
                        <a 
                            href={routeMap[text]}
                            className="relative group text-black transition-colors duration-300 ease-in-out text-sm"
                        >
                            {text}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
