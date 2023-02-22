import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky text-white top-0 bg-transparent bg-opacity-90 backdrop-filter backdrop-blur-lg flex justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
        </div>
      </nav>
      <div className="flex-1">
        {children}
      </div>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <p>Email: <a href="mailto:jashoang2583@gmail.com" className="underline text-blue-500">jashoang2583@gmail.com</a></p>
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
