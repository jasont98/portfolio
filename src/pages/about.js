import React from 'react'

const about = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div>
        {/* <h1>About Me</h1> */}
        <br></br>
      </div>
       <div>
        <h1>Welcome to my personal website! My name is Jason and I am a software engineer based in Orange County, California. 
          Ever since I was a whippersnapper, I have always been fascinated by technology,
          and once I had discovered video games, I knew there was no turning back for me.
          As I grow older, so does my love for computers. 
          One of my favorite games of all time is Stardew Valley by ConcernedApe, 
          not just because it is an amazing game, but also because it was created by only one person, ConcernedApe.
          I was amazed at how by just writing lines (and lines) of code, one is able to bring their creation to life! 
          Pursuing programming has been the best decision of my life, 
          I was able to meet and learn from so many talented developers and made many friends and connections.
          But most importantly, it is simply something that I'd love to do for the rest of my life. 
        </h1>
        <br></br>
        <div>
        <h2>My Hobbies Include:</h2>
          <br></br>
          <li>Gardening</li>
          <li>Surfing</li>
          <li>Fishing</li>
          <li>Video Games</li>
          <li>And of Course, Coding!</li>
        </div>
        <br></br>
        <div>
          <h1>Links:</h1>
          <br></br>
          <li><a href="mailto:jashoang2583@gmail.com" className="underline text-blue-500">Email</a></li>
          <li><a href="https://github.com/jasont98" className="underline text-blue-500">Github</a></li>
          <li><a href="https://medium.com/@jashoang2583" className="underline text-blue-500">Medium</a></li>
        </div>
       </div>
    </div>
  );
};

export default about;