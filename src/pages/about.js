import React from 'react'

const about = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div>
        <br></br>
      </div>
      <div className="container mx-auto my-8 p-6 ">
        <h1 className="text-3xl font-bold mb-4">Welcome to my personal website! My name is Jason and I am a software engineer based in Orange County, California.</h1>
        <p className="text-lg leading-7 mt-4">Ever since I was a little whippersnapper, I have always been fascinated by technology,
                and once I had discovered video games, I knew there was no turning back for me. As I grow older, so does my love for computers. 
        </p>
        <p className="text-lg leading-7 mt-4">One of my favorite games of all time (that inspired me to learn coding) is Stardew Valley by ConcernedApe, 
                not just because it is an amazing game, but also because it was created by only one person, ConcernedApe.
                I was amazed at how by just writing lines (and lines) of code, one is able to bring their creation to life! 
        </p>
        <p className="text-lg leading-7 mt-4">Pursuing programming has been the best decision of my life, 
                I&apos;ve gotten to meet and learn from so many talented developers while making many friends and connections.
                But most importantly, it is simply something that I&apos;d love to do for the rest of my life. 
        </p>
      </div>
          <div className="container mx-auto my-8 p-6 ">
            <h2 class="text-xl font-bold mb-4">My Hobbies Include:</h2>
          <ul class="list-disc list-inside">
            <li>Gardening</li>
            <li>Surfing</li>
            <li>Fishing</li>
            <li>Video Games</li>
            <li>And of Course, Coding!</li>
          </ul>
        </div>
        <div className="container mx-auto my-8 p-6 text-xl font-bold mb-4 text-blue-500">
          <a href="https://drive.google.com/file/d/1swAwa8NHzzPI1GFhDH84qNpKw9tYr7ZA/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
       </div>
  );
};

export default about;