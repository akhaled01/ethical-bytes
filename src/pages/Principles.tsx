import React from "react";
import { motion } from "framer-motion";
import {
  ThumbsUp,
  ThumbsDown,
  Shield,
  Heart,
  Brain,
  AlertTriangle,
} from "lucide-react";

function Principles() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-6">AI Principles</h1>
        <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
          Just like we have rules for being good friends, there are important
          rules for using AI responsibly. Let's learn what makes AI helpful and
          safe!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <ComparisonCard
          title="Good AI"
          icon={<ThumbsUp className="w-12 h-12 text-green-500" />}
          points={[
            "Helps people make better decisions",
            "Respects privacy and personal information",
            "Treats everyone fairly and equally",
            "Is transparent about being AI",
            "Has safety measures in place",
            "Works together with humans",
            "Follows ethical guidelines",
            "Protects user safety",
          ]}
          color="bg-green-50 dark:bg-green-900/60"
          borderColor="border-green-200"
          examples={[
            "AI helping doctors find illnesses faster",
            "AI tutors that explain things clearly",
            "AI that checks if information is true",
            "AI that helps people with disabilities",
          ]}
        />

        <ComparisonCard
          title="Bad AI"
          icon={<ThumbsDown className="w-12 h-12 text-red-500" />}
          points={[
            "Makes decisions without human input",
            "Shares private information",
            "Treats some people differently",
            "Pretends to be human",
            "Has no safety checks",
            "Replaces human judgment completely",
            "Ignores ethical concerns",
            "Creates harmful content",
          ]}
          color="bg-red-50 dark:bg-red-900/60"
          borderColor="border-red-200"
          examples={[
            "AI that shares personal details",
            "AI that makes unfair choices",
            "AI that spreads false information",
            "AI that tricks people",
          ]}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <PrincipleCard
          icon={<Shield className="w-10 h-10 text-blue-500" />}
          title="Safety First"
          description="Always use AI with a grown-up nearby and never share personal information."
          color="bg-blue-50 dark:bg-blue-300"
        />
        <PrincipleCard
          icon={<Heart className="w-10 h-10 text-pink-500" />}
          title="Be Kind"
          description="Use AI to help others and make the world a better place."
          color="bg-pink-50 dark:bg-pink-300"
        />
        <PrincipleCard
          icon={<Brain className="w-10 h-10 text-purple-500" />}
          title="Think Critically"
          description="Don't believe everything AI tells you - always think for yourself!"
          color="bg-purple-50 dark:bg-purple-300"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-yellow-50 dark:bg-yellow-300 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-400"
      >
        <div className="flex items-center gap-4 mb-4">
          <AlertTriangle className="w-8 h-8 text-yellow-600" />
          <h2 className="text-2xl font-bold text-yellow-800">
            Important Reminders
          </h2>
        </div>
        <ul className="space-y-3 text-yellow-700">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            Always double-check information from AI
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            Tell a grown-up if AI shows you something that makes you
            uncomfortable
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            Use AI as a helper, not a decision-maker
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            Be honest about using AI-created content
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

function ComparisonCard({
  title,
  icon,
  points,
  color,
  borderColor,
  examples,
}: {
  title: string;
  icon: React.ReactNode;
  points: string[];
  color: string;
  borderColor: string;
  examples: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-xl border-2 ${color} ${borderColor}`}
    >
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="mb-6">
        <h3 className="font-bold mb-3">Key Points:</h3>
        <ul className="space-y-3">
          {points.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-gray-400" />
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-3">Examples:</h3>
        <ul className="space-y-2">
          {examples.map((example, index) => (
            <li key={index} className="text-gray-600 dark:text-white italic">
              • {example}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function PrincipleCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${color} p-6 rounded-xl shadow-lg`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-white p-3 rounded-full shadow-md mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default Principles;
