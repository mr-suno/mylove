import                                     "../index.css";
import React, { useEffect, useState } from "react";
import Typewriter                     from "typewriter-effect";

// Icons

import Python                         from "../content/images/languages/Python.png";
import JavaScript                     from "../content/images/languages/JavaScript.png";
import TypeScript                     from "../content/images/languages/TypeScript.png";
import Swift                          from "../content/images/languages/Swift.png";
import Lua                            from "../content/images/languages/Lua.png";

const icons = [Python, TypeScript, JavaScript, Swift, Lua];

const Home: React.FC = () => {
  const greetings = ["hola", "hello", "bonjour", "hallo", "ciao", "ni hao", "ahlan", "hallo", "hei", "geia"];

  return (
    <div className="absolute -z-10 inset-0 h-full w-full matte-black josefin-sans">
      <div className="h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:35px_35px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_80%,transparent_100%)] flex flex-col items-center justify-center">
        <div className="text-gray-300 text-8xl glow-text flex items-center justify-center transition-all duration-500">
          <span className={`welcome-tag italic transition-opacity duration-500`}>
            <Typewriter
              options={{
                strings: greetings,
                autoStart: true,
                loop: true,
                delay: 150
              }}
            />
          </span>
          <span className="ml-2">, I'm Suno!</span>
        </div>
        <div className="text-2xl text-gray-300 relative glow-text matte-black">
          an untalented guy that makes stuff
        </div>

        <div className="mt-16 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_80%,transparent_100%)]">
          <div className="flex justify-center matte-black py-10 px-[calc(1rem+30px)]">
            <div className="flex space-x-12">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className={`w-14 h-14 rounded-xl glow-effect flex light-black opacity-90 items-center justify-center relative transform transition-all duration-150 ease-in-out ${
                  
                    index === Math.floor(icons.length / 2) || (icons.length % 2 === 0 && index === Math.floor(icons.length / 2) - 1) ? 'scale-125 hover:scale-150' : 'hover:scale-125'
                  
                  } active:scale-95 border border-gray-900`}>

                  <img src={icon} alt={`Icon ${index + 1}`} className="w-9 h-9 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;