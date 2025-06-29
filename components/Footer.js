import { FaGithub, FaLinkedin, FaXTwitter, FaLocationDot } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full py-10 mt-auto bg-white">
    <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
      <div className="flex space-x-6 mb-5 text-gray-700">
        <a
          href="https://github.com/gh0stfrk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-black transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/syydsalman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-blue-700 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/gh0stfrk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-black transition-colors duration-200"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      </div>

      <div className="flex items-center space-x-2 mb-2 text-gray-600 text-sm">
        <FaLocationDot className="text-base" />
        <span className="font-medium">Mumbai, India</span>
      </div>

      <div className="text-xs text-gray-500 tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">Salman Sayyed</span>
      </div>
    </div>
  </footer>
);

export default Footer;
