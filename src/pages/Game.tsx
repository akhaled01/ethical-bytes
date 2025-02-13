import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavbar } from "@/context/NavbarContext";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown, Star, Trophy } from "lucide-react";
import confetti from "canvas-confetti";

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
  const { setIsTransparent } = useNavbar();
  const [score, setScore] = useState(0);

  useEffect(() => {
    setIsTransparent(false);
  }, [setIsTransparent]);
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
  const [isLoading, setIsLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fireConfetti = useCallback((options = {}) => {
    if (canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
        disableForReducedMotion: true
      });
      myConfetti({
        ...options,
        colors: ['#4ade80', '#60a5fa', '#f472b6', '#facc15'],
      });
    }
  }, []);

  const fireworks = useCallback(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Left side fireworks
      fireConfetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random() * 0.3, y: Math.random() - 0.2 }
      });
      // Right side fireworks
      fireConfetti({
        ...defaults,
        particleCount,
        origin: { x: 0.7 + (Math.random() * 0.3), y: Math.random() - 0.2 }
      });
    }, 250);
  }, [fireConfetti]);


  const handleDrop = (category: "responsible" | "irresponsible") => {
    if (!currentBehavior || isLoading || questionCount > 6) return;
    setIsLoading(true);

    const isCorrect = currentBehavior.correct === category;
    setShowFeedback(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      // Simple confetti for correct answer
      fireConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.35 }
      });
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setShowFeedback(null);
      setQuestionCount(prev => prev + 1);
      if (remainingBehaviors.length === 0 || questionCount >= 6) {
        setGameComplete(true);
        setCurrentBehavior(null);
        
        // If all answers were correct, trigger fireworks
        if (score + (isCorrect ? 1 : 0) === behaviors.length) {
          fireworks();
        }
      } else {
        setCurrentBehavior(remainingBehaviors[0]);
        setRemainingBehaviors(remainingBehaviors.slice(1));
      }
      setIsLoading(false);
    }, 1000);
  };

  const resetGame = () => {
    setQuestionCount(1);
    setIsLoading(false);
    setScore(0);
    setStreak(0);
    setCurrentBehavior(behaviors[0]);
    setRemainingBehaviors(behaviors.slice(1));
    setGameComplete(false);
    setShowFeedback(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 relative">
      <canvas
        ref={canvasRef}
        className="fixed left-0 top-0 w-screen h-screen pointer-events-none z-50"
      />

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
          className="text-center text-gray-800 dark:text-white"
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
            <Trophy className="w-24 h-24 text-yellow-500 dark:text-yellow-400 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Game Complete!</h2>
          <p className="text-xl mb-4 text-gray-700 dark:text-gray-200">
            You got {score} out of {behaviors.length} correct!
          </p>
          <motion.button
            onClick={resetGame}
            className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 dark:from-blue-600 dark:via-blue-500 dark:to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Play Again
          </motion.button>
        </motion.div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white dark:bg-purple-900/40 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center transition-all duration-300 border border-purple-100 dark:border-purple-700/50">
            <div className="flex justify-center items-center gap-4 mb-6">
              <motion.div
                className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 dark:from-purple-600 dark:to-purple-400 px-6 py-3 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
              >
                <Star className="w-6 h-6 text-white animate-pulse" />
                <motion.p 
                  className="text-xl font-bold text-white"
                  key={score}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  Score: {score}
                </motion.p>
              </motion.div>
              {streak > 1 && (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Star className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                  <p className="text-lg text-gray-800 dark:text-white">Streak: {streak}!</p>
                </motion.div>
              )}
            </div>
            {currentBehavior && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.3}
                whileDrag={{ scale: 1.05, rotate: [-1, 1] }}
                className="text-xl font-medium p-6 bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900 text-gray-800 dark:text-white rounded-lg relative overflow-hidden transition-all duration-300 cursor-grab active:cursor-grabbing shadow-lg hover:shadow-xl border border-purple-200 dark:border-purple-700/50"
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
              icon={<ThumbsUp className="w-12 h-12 text-green-600 dark:text-green-400" />}
              onDrop={() => handleDrop("responsible")}
              color="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-900"
              borderColor="border-green-300 dark:border-green-500"
              disabled={isLoading}
            />

            <DropZone
              title="Irresponsible"
              icon={<ThumbsDown className="w-12 h-12 text-red-600 dark:text-red-400" />}
              onDrop={() => handleDrop("irresponsible")}
              color="bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-950 dark:to-rose-900"
              borderColor="border-red-300 dark:border-red-500"
              disabled={isLoading}
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
  disabled,
}: {
  title: string;
  icon: React.ReactNode;
  onDrop: () => void;
  color: string;
  borderColor: string;
  disabled?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${color} dark:bg-purple-900/30 backdrop-blur-sm rounded-xl p-8 border-2 ${borderColor} dark:border-purple-600/50 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-xl dark:hover:bg-purple-800/40'} text-center transition-all duration-300`}
      onClick={disabled ? undefined : onDrop}
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
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-500/10 dark:to-purple-300/5 rounded-xl pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
}

export default Game;
