import { FaGithub, FaLinkedin, FaXTwitter, FaLocationDot } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full py-8 mt-auto bg-gradient-to-t from-gray-100 via-white to-white shadow-inner">
    <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
      <div className="flex space-x-6 mb-4">
        <a
          href="https://github.com/awswithsalman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/awswithsalman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition-colors text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/awswithsalman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:text-sky-800 transition-colors text-2xl"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      </div>
      <div className="flex items-center space-x-2 mb-2 text-gray-700">
        <FaLocationDot className="text-red-500" />
        <span className="font-medium">Mumbai, India</span>
      </div>
      <div className="mt-1 text-xs text-gray-500 tracking-wide">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700">Salman Sayyed</span>
      </div>
    </div>
  </footer>
);

export default Footer;