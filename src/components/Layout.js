import Link from 'next/link';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Layout = ({ children }) => {
    return (
        <div>
          <nav className="flex justify-between items-center bg-gray-200 py-4 px-8">
            {/* <div>
            </div> */}
            <div className="flex items-center space-x-4">
              <Link href="/">
                Home
              </Link>
              <Link href="/about">
                About Me
              </Link>
              <Link href="/projects">
                My Projects
              </Link>
              <Link href="/skills">
                My Skills
              </Link>
            </div>
          </nav>
          {children}
        </div>
      );
    };

export default Layout;
