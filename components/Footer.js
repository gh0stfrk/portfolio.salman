import { FaGithub, FaLinkedin, FaXTwitter, FaLocationDot } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full py-8 mt-auto">
    <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
      <div className="flex space-x-6 mb-4">
        <a
          href="https://github.com/gh0stfrk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/syydsalman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/gh0stfrk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      </div>
      <div className="flex items-center space-x-2 mb-2 text-gray-700">
        <FaLocationDot/>
        <span className="font-medium">Mumbai, India</span>
      </div>
      <div className="mt-1 text-xs text-gray-500 tracking-wide">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700">Salman Sayyed</span>
      </div>
    </div>
  </footer>
);

export default Footer;