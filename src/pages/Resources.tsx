import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Video, Gamepad2, Link } from "lucide-react";

function Resources() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        Fun AI Learning Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <ResourceCard
          title="AI Storybook"
          icon={<BookOpen className="w-8 h-8 text-purple-500" />}
          description="Read fun stories about AI and how it helps people every day!"
          type="Stories"
        />

        <ResourceCard
          title="Watch & Learn"
          icon={<Video className="w-8 h-8 text-red-500" />}
          description="Cool videos explaining AI in simple ways!"
          type="Videos"
        />

        <ResourceCard
          title="AI Games"
          icon={<Gamepad2 className="w-8 h-8 text-green-500" />}
          description="Play games that teach you about AI while having fun!"
          type="Games"
        />

        <ResourceCard
          title="Helpful Links"
          icon={<Link className="w-8 h-8 text-blue-500" />}
          description="Find more great resources about AI for kids!"
          type="Links"
        />
      </div>

      <div className="mt-12 p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4">Remember!</h2>
        <ul className="space-y-2 text-yellow-700">
          <li>• Always ask a grown-up before clicking on links</li>
          <li>• Don't share personal information with AI</li>
          <li>• If something feels wrong, tell a trusted adult</li>
          <li>• Have fun while learning!</li>
        </ul>
      </div>
    </div>
  );
}

function ResourceCard({
  title,
  icon,
  description,
  type,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  type: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100"
    >
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
        {type}
      </span>
    </motion.div>
  );
}

export default Resources;
