'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const questions = [
    {
      text: "May i know are you a male or female?",
      options: ["male", "female"],
      responses: {
        male: "what are you doing here bitch get off?",
        female: null
      }
    },
    {
      text: "Are you likeapro's special one? ❤︎",
      options: ["yes", "no"],
      responses: {
        no: "You still think that - rethink",
        yes: null
      }
    },
    {
      text: "Are you likeapros Pasandida aurat? 🫣🫣❤️",
      options: ["yes", "no", "i don't know"],
      responses: {
        no: "There is no place for you",
        "i don't know": "Think again try clicking yes",
        yes: null
      }
    },
    {
      text: "Oh, Are you the one who was angry on him? 😤🥺",
      options: ["yes", "no"],
      responses: {
        no: "There is no place for you",
        yes: null
      }
    },
    {
      text: "Welcome mam, Sir has sent you a sweet little message 💥\nHope you enjoy",
      options: [],
      responses: {}
    }
  ];

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleOptionClick = (option: string) => {
    const currentQuestion = questions[currentStep];
    const response = currentQuestion.responses[option as keyof typeof currentQuestion.responses];

    if (response) {
      setMessage(response);
    } else {
      setMessage('');
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const getButtonColor = (option: string) => {
    if (option === 'yes') return 'bg-green-500 hover:bg-green-600';
    if (option === 'no') return 'bg-red-500 hover:bg-red-600';
    if (option === "i don't know") return 'bg-red-500 hover:bg-red-600';
    return 'bg-blue-500 hover:bg-blue-600';
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/something.pdf';
    link.download = 'something.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="text-white text-5xl text-center mb-8 whitespace-pre-line">
        {currentStep === 0 ? (
          <>
            hellooo i am rocket (an ai assistant){"\n"}
            <span className="text-blue-300 px-2 rounded">of my sensei sir likeapro</span> 🤖👾
          </>
        ) : currentStep === questions.length - 1 ? (
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl whitespace-pre-line">
              Welcome mam, Sir has sent you a sweet little message💥💥
            </div>
            <div className="text-red-300 text-5xl mb-4">
              Hope you enjoy😎
            </div>
            <button
              onClick={handleDownload}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded text-lg transition-colors duration-200"
            >
              Download the message
            </button>
          </div>
        ) : (
          questions[currentStep].text
        )}
      </div>
      
      {showMessage && (
        <div className="text-red-200 text-3xl text-center mb-8">
          {message}
        </div>
      )}

      {currentStep === 0 ? (
        <button
          onClick={() => setCurrentStep(1)}
          className="bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg transition-colors duration-200"
        >
          Proceed
        </button>
      ) : currentStep < questions.length - 1 ? (
        <div className="flex flex-row gap-4 justify-center">
          {questions[currentStep].options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`${getButtonColor(option)} text-white font-bold py-2 px-8 rounded text-lg transition-colors duration-200`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </main>
  );
} 