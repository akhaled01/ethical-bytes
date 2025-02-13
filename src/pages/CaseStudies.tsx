import React, { useEffect } from "react";
import { useNavbar } from "@/context/NavbarContext";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Shield,
  Notebook as Robot,
  Sparkles,
  BookOpen,
  Leaf
} from "lucide-react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

function CaseStudies() {
  const { setIsTransparent } = useNavbar();

  useEffect(() => {
    setIsTransparent(false);
  }, [setIsTransparent]);

  const videoSrc =
    "https://www.youtube.com/embed/E7Bt8snV360?si=_bfORIEogXcszRSJ";
  const thumbnailSrc = "/assets/C1-NearbyDoc.png";

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 dark:text-white mb-6">AI in Action</h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8">
          Let's explore amazing ways AI helps make our world better! These are
          real examples of AI being used responsibly.
        </p>
      </motion.div>

      <div className="space-y-12">
        <CaseStudy
          title="askNivi Healthcare Assistant"
          icon={<Stethoscope className="w-12 h-12 text-blue-500" />}
          description="Sarah used askNivi to find healthcare information and connect with nearby doctors. This AI-powered platform makes healthcare more accessible and personalized."
          imageUrl="/assets/C1-NearbyDoc.png"
          benefits={[
            "Connects users with local healthcare providers",
            "Provides personalized health information",
            "Makes healthcare more accessible",
            "Available 24/7 for health queries",
          ]}
          safetyMeasures={[
            "Protects user privacy and data",
            "Verified healthcare information",
            "Partners with qualified medical professionals",
            "Regular content updates",
          ]}
          link="https://www.cariboudigital.net/publication/case-studies-in-responsible-ai-for-development/"
        />

        <CaseStudy
          title="RobotsMali Education"
          icon={<BookOpen className="w-12 h-12 text-yellow-500" />}
          description="Reem uses RobotsMali to create schoolbooks in local languages, helping children in Mali learn better by providing educational materials in their native languages."
          imageUrl="/assets/C3-SchoolBook.png"
          benefits={[
            "Creates books in local languages",
            "Makes education more accessible",
            "Preserves cultural identity",
            "Improves learning outcomes",
          ]}
          safetyMeasures={[
            "Quality-checked translations",
            "Culturally appropriate content",
            "Community involvement",
            "Teacher-approved materials",
          ]}
          link="https://www.cariboudigital.net/wp-content/uploads/2024/09/cases_responsibleAI4D_web.pdf"
        />

        <CaseStudy
          title="Plantix Crop Assistant"
          icon={<Leaf className="w-12 h-12 text-green-500" />}
          description="Ahmed uses Plantix to identify crop diseases and find solutions to improve crop health, helping farmers grow more food and earn better incomes."
          imageUrl="/assets/C2-Farmer.png"
          benefits={[
            "Identifies crop diseases accurately",
            "Provides actionable solutions",
            "Improves crop yields",
            "Increases farmer income",
          ]}
          safetyMeasures={[
            "Verified agricultural expertise",
            "Regular updates for new diseases",
            "Localized recommendations",
            "Accessible offline when needed",
          ]}
          link="https://www.cariboudigital.net/publication/case-studies-in-responsible-ai-for-development/"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-xl p-8 transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          What We've Learned
        </h2>
        <div className="relative max-w-4xl mx-auto mb-8">
          <HeroVideoDialog
            videoSrc={videoSrc}
            thumbnailSrc={thumbnailSrc}
            thumbnailAlt="AI in Action Overview"
            className="w-full aspect-video"
            animationStyle="from-bottom"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <LearningPoint
            icon={<Robot className="w-8 h-8 text-blue-500" />}
            title="AI is a Helper"
            description="AI works best when it helps humans, not replaces them"
          />
          <LearningPoint
            icon={<Shield className="w-8 h-8 text-green-500" />}
            title="Safety First"
            description="Good AI always has safety measures in place"
          />
          <LearningPoint
            icon={<BookOpen className="w-8 h-8 text-purple-500" />}
            title="Keep Learning"
            description="AI is always improving, and so should our understanding of it"
          />
        </div>
      </motion.div>
    </div>
  );
}

function CaseStudy({
  title,
  icon,
  description,
  imageUrl,
  benefits,
  safetyMeasures,
  link,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  imageUrl: string;
  benefits: string[];
  safetyMeasures: string[];
  link?: string;
}) {
  const Card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-white dark:bg-purple-800/40 dark:backdrop-blur-sm rounded-xl shadow-lg overflow-hidden ${link ? 'cursor-pointer hover:shadow-xl transition-all duration-300' : ''}`}
    >
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="relative h-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />

          </div>
        </div>
        <div className="p-8 md:w-1/2 dark:bg-purple-900/20">
          <div className="flex items-center gap-4 mb-4">
            {icon}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-6">{description}</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Benefits:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-green-600 dark:text-green-400 mb-2">
                Safety Measures:
              </h3>
              <ul className="space-y-2">
                {safetyMeasures.map((measure, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500 dark:text-green-400" />
                    {measure}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {Card}
    </a>
  ) : Card;
}

function LearningPoint({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-purple-800/30 dark:backdrop-blur-sm p-6 rounded-xl shadow-md transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-50 dark:bg-purple-900/40 p-3 rounded-full mb-4 transition-all duration-300">{icon}</div>
        <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-200">{description}</p>
      </div>
    </motion.div>
  );
}

export default CaseStudies;
