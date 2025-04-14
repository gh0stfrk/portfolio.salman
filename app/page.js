import RotatingTile from "@/components/RotatingTile";

import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaLocationDot } from "react-icons/fa6";



import Navbar from "@/components/NavBar";

const HomePage = () => {
  return (
    <div>
      <Navbar text="posts" />
      <div className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 p-4 md:px-8 lg:px-12">
          {/* Left Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Profile Card */}
            <div className="bg-gray-200 rounded-xl p-5">

              <h2 className="text-2xl font-bold">Salman Sayyed</h2>
              <p className="text-sm text-gray-600">Cloud Engineer</p>
              <p className="mt-2 text-sm">I build cloud oriented solutions using AWS and JavaScript</p>

              <div className="mt-4 flex gap-4 text-2xl">
                <a href="https://github.com/awswithsalman" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  <FaGithub />
                </a>
                <a href="https://x.com/awswithsalman" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  <FaXTwitter />
                </a>
                <a href="https://linkedin.com/in/awswithsalman" target="_blank" rel="noopener noreferrer"
                  className="hover:text-black">
                  <FaLinkedin />
                </a>
              </div>

              {/* Location */}
              <div className="mt-5 flex items-center gap-2 text-sm text-gray-700">
                <FaLocationDot/>
                <span>Mumbai, India</span>
              </div>

            </div>
            {/* Rotating Tile */}
            <RotatingTile />
          </div>
          {/* Main Content */}
          <div className="bg-gray-200 rounded-xl p-6 h-full">
            <h2 className="text-lg font-semibold">Projects</h2>
            {/* Your projects go here */}
            <div className="w-full">
              This Project
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 gap-4">{postPreviews}</div> */}
    </div>
  );
};

export default HomePage;