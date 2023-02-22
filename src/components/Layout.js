import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div>
          <nav className="sticky top-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg flex justify-between items-center py-4 px-8">
            <div className="flex items-center space-x-4">
              <Link href="/">Home</Link>
              <Link href="/about">About Me</Link>
              {/* <Link href="/projects">My Projects</Link>
              <Link href="/skills">My Skills</Link> */}
            </div>
          </nav>
          {children}
        </div>
      );
    };

export default Layout;
