import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown, Star, Trophy } from "lucide-react";

type Behavior = {
  id: number;
  text: string;
  correct: "responsible" | "irresponsible";
};

const behaviors: Behavior[] = [
  {
    id: 1,
    text: "Checking if information is true before sharing",
    correct: "responsible",
  },
  {
    id: 2,
    text: "Sharing personal information with AI",
    correct: "irresponsible",
  },
  {
    id: 3,
    text: "Using AI to help with homework research",
    correct: "responsible",
  },
  {
    id: 4,
    text: "Letting AI make all decisions for you",
    correct: "irresponsible",
  },
  {
    id: 5,
    text: "Being honest about AI-generated content",
    correct: "responsible",
  },
  {
    id: 6,
    text: "Using AI to pretend to be someone else",
    correct: "irresponsible",
  },
];

function Game() {
  const [score, setScore] = useState(0);
  const [currentBehavior, setCurrentBehavior] = useState<Behavior | null>(
    behaviors[0],
  );
  const [gameComplete, setGameComplete] = useState(false);
  const [remainingBehaviors, setRemainingBehaviors] = useState(
    behaviors.slice(1),
  );
  const [showFeedback, setShowFeedback] = useState<
    "correct" | "incorrect" | null
  >(null);
  const [streak, setStreak] = useState(0);

  const handleDrop = (category: "responsible" | "irresponsible") => {
    if (!currentBehavior) return;

    const isCorrect = currentBehavior.correct === category;
    setShowFeedback(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setShowFeedback(null);
      if (remainingBehaviors.length === 0) {
        setGameComplete(true);
        setCurrentBehavior(null);
      } else {
        setCurrentBehavior(remainingBehaviors[0]);
        setRemainingBehaviors(remainingBehaviors.slice(1));
      }
    }, 1000);
  };

  const resetGame = () => {
    setScore(0);
    setStreak(0);
    setCurrentBehavior(behaviors[0]);
    setRemainingBehaviors(behaviors.slice(1));
    setGameComplete(false);
    setShowFeedback(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 mb-8"
        animate={{
          backgroundPosition: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% auto",
        }}
      >
        AI Responsibility Game
      </motion.h1>

      {gameComplete ? (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-4">Game Complete!</h2>
          <p className="text-xl mb-4">
            You got {score} out of {behaviors.length} correct!
          </p>
          <motion.button
            onClick={resetGame}
            className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Play Again
          </motion.button>
        </motion.div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Star className="w-6 h-6 text-yellow-500" />
                <p className="text-lg">Score: {score}</p>
              </motion.div>
              {streak > 1 && (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Star className="w-6 h-6 text-orange-500" />
                  <p className="text-lg">Streak: {streak}!</p>
                </motion.div>
              )}
            </div>
            {currentBehavior && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-medium p-4 bg-gradient-to-r from-yellow-100 via-amber-100 to-orange-100 rounded-lg relative overflow-hidden"
              >
                {currentBehavior.text}
                <AnimatePresence>
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`absolute inset-0 flex items-center justify-center ${
                        showFeedback === "correct"
                          ? "bg-green-500/90"
                          : "bg-red-500/90"
                      }`}
                    >
                      <p className="text-white text-2xl font-bold">
                        {showFeedback === "correct"
                          ? "Correct! 🎉"
                          : "Try Again! 💪"}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <DropZone
              title="Responsible"
              icon={<ThumbsUp className="w-12 h-12 text-yellow-500" />}
              onDrop={() => handleDrop("responsible")}
              color="bg-gradient-to-br from-yellow-100 to-amber-100"
              borderColor="border-yellow-200"
            />

            <DropZone
              title="Irresponsible"
              icon={<ThumbsDown className="w-12 h-12 text-orange-500" />}
              onDrop={() => handleDrop("irresponsible")}
              color="bg-gradient-to-br from-orange-100 to-red-100"
              borderColor="border-orange-200"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function DropZone({
  title,
  icon,
  onDrop,
  color,
  borderColor,
}: {
  title: string;
  icon: React.ReactNode;
  onDrop: () => void;
  color: string;
  borderColor: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${color} rounded-xl p-8 border-2 ${borderColor} cursor-pointer text-center transition-all duration-200`}
      onClick={onDrop}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700">Click to categorize the behavior</p>
      </motion.div>
    </motion.div>
  );
}

export default Game;
