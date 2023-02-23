import React from 'react'

const index = () => {
  return (
<div className="flex h-screen justify-center items-center flex-col" style={{ height: 'calc(100vh - 200px)' }}>
      <div className="text-center">
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
          Hello! I&apos;m Jason
        </h1>
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black">
          Full Stack Software Engineer
        </h1>
      </div>
    </div>
  );
};

export default index;
