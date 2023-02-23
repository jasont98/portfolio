import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium, faMailchimp, faLinkedin, } from '@fortawesome/free-brands-svg-icons'


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky text-white top-0 bg-gray-900  backdrop-filter backdrop-blur-lg flex justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
        </div>
      </nav>
      <div className="flex-1">
        {children}
      </div>
      <footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto">
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
      <div className="flex space-x-4">
        <a href="https://github.com/jasont98" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className=" hover:text-blue-400" />
        </a>
        <a href="https://medium.com/@jashoang2583" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} size="2x" className=" hover:text-blue-400" />
        </a>
        {/* <a href="mailto:jashoang2583@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMailchimp} size="2x" className=" hover:text-blue-400" />
        </a> */}
        <a href="https://www.linkedin.com/in/jason-tran-67b6ba253/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className=" hover:text-blue-400" />
        </a>
      </div>
      <p className="mt-4">Email: <a href="mailto:jashoang2583@gmail.com" className="underline text-blue-500">jashoang2583@gmail.com</a></p>
      <div>
        <p className="text-center text-gray-400 text-sm mt-4">&copy; 2023 Jason Tran. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Layout;
