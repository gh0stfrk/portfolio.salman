import RotatingTile from "@/components/RotatingTile";

import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaLocationDot } from "react-icons/fa6";

import Navbar from "@/components/NavBar";

const tileColors = [];

const projects = [
  {
    title: "AWS CloudWatch Dashboard",
    description: "Custom dashboard for monitoring AWS resources using CloudWatch metrics and logs.",
    tech: ["AWS", "CloudWatch", "JavaScript"],
    link: "https://github.com/awswithsalman/cloudwatch-dashboard"
  },
  {
    title: "Serverless API",
    description: "RESTful API built with AWS Lambda and API Gateway using the serverless framework.",
    tech: ["AWS Lambda", "API Gateway", "Node.js"],
    link: "https://github.com/awswithsalman/serverless-api"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    link: "https://github.com/awswithsalman/portfolio"
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar text="posts" />
      <div className="w-full min-h-[calc(100vh-64px)] bg-white"> {/* Subtract navbar height */}
        <div className="h-full grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 p-4 md:px-8 lg:px-12">
          {/* Left Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Profile Card */}
            <div className="bg-gray-200 rounded-xl p-7">

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
          <div className="bg-gray-100 rounded-xl p-6 md:p-8 h-full backdrop-blur-sm">
            {/* <h2 className=" text-2xl font-bold mb-6">Projects</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`
                    ${tileColors[index % tileColors.length]}
                     p-4
                    transform transition-all duration-300
                    hover:scale-[1.02] hover:shadow-lg
                    border border-gray-200 rounded-lg
                  `}
                >
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-white bg-opacity-50 backdrop-blur-sm
                                 text-gray-700 text-xs px-2 py-1 rounded-sm
                                 border border-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-4 py-2 
                             bg-gray-100 hover:bg-gray-200
                             text-sm text-gray-700 hover:text-gray-900
                             rounded-lg transition-all duration-300
                             border border-gray-200 hover:border-gray-300
                             shadow-sm hover:shadow-md"
                  >
                    <span className="mr-2">View Project</span>
                    <span className="transform transition-all duration-300 
                                 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;