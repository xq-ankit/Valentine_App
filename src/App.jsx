import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

const Home = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });

  const noTexts = [
    "No",
    "Are you sure?",
    "Think again!",
    "Last chance!",
    "Really? 😢",
    "Please don't say no...",
    "You might regret this...",
    "No isn't an option anymore! 💖",
    "Wait, are you sure?",
    "Don't do this to me! 🥺",
    "Think one more time!",
    "Final warning! 🚨",
    "My heart can't take this... 💔",
    "Please reconsider! 🙏",
    "You're breaking my heart! 💞",
    "Say yes, pretty please? 🥹",
    "No?? But... why? 😢",
    "Don't make me sad! 😭",
    "I believe in you! 💖",
    "You're better than this! 🥹",
    "Just one little yes? 🥰",
    "Are you 100% sure? 🤔",
    "No takesy-backsies? 😟",
    "Please? With a cherry on top! 🍒",
    "What if I give you a cookie? 🍪",
    "You're breaking my tiny heart! 💔",
    "Think of the possibilities! ✨",
    "But what if it's destiny? 🌟",
    "Even my dog is sad now! 🐶💔",
    "Let’s not be hasty! ⏳",
    "Rethink, refresh, retry? 😁",
    "It’s a trap! Say yes! 🎭",
    "Oops, wrong answer! 😜",
    "You have unlocked: disappointment 😭",
    "Even the stars are sad now! ✨😢",
    "This is your sign to say YES! 🛑",
    "The universe says yes! 🌌",
    "One tiny yes won’t hurt! 🤭",
    "No is just a sideways yes! 😉",
    "You're my only hope! 🥹",
    "What would a cat do? 🐱",
    "I’ll remember this forever... 😢",
    "Choose wisely... 😏",
    "You're making me cry... 😭",
    "Last, last, last chance!",
    "Final offer: say yes? 😆",
    "What if I say pretty please? 🥺",
    "Are you REALLY sure? 🤨",
  ];

  const navigate = useNavigate();

  const handleNoClick = () => {
    setNoCount((prevCount) => (prevCount + 1) % noTexts.length);
    setYesButtonSize((prevSize) => prevSize + 0.2);
    setNoPosition({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  };

  const handleYesClick = () => {
    navigate("/yay");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-red-100">
      <h1 className="text-3xl font-bold text-red-700">Will you be my Valentine?</h1>
      
      <div className="mt-5">
        <img
          src="https://media1.giphy.com/media/cLS1cfxvGOPVpf9g3y/giphy.gif"
          alt="Cute animated illustration"
          className="max-w-xs"
        />
      </div>

      {/* Buttons */}
      <div className="mt-5 relative w-full h-40 flex items-center justify-center">
        <button
          className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg transition-transform duration-200"
          style={{ transform: `scale(${yesButtonSize})` }}
          onClick={handleYesClick}
        >
          Yes
        </button>
        <button
          className="absolute px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg transition-all duration-200"
          style={{
            top: noPosition.top,
            left: noPosition.left,
            position: "absolute",
          }}
          onClick={handleNoClick}
        >
          {noTexts[noCount]}
        </button>
      </div>
    </div>
  );
};

const YayPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-pink-100">
      <h1 className="text-4xl font-bold text-pink-700">Yay! 🎉💖</h1>
      <p className="text-xl text-gray-700 mt-2">Cutie,you made the right choice!😊</p>

      <div className="gif_container mt-5">
        <img
          src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
          alt="Cute animated illustration"
          className="max-w-xs"
        />
      </div>

      <div className="mt-5">
        <a
          href="https://chat.whatsapp.com/HvDnySjnCybBhtcIj55lkY"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          Join me in dreaming up the sweetest baby names! 💕✨ 
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yay" element={<YayPage />} />
      </Routes>
    </Router>
  );
};

export default App;
