import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Heart,
  Star,
} from "lucide-react";

function Home() {
  return (
    <div className="relative text-center">
      {/* Hero Banner */}
      <motion.div
        className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('/assets/img1.png')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.4)_100%)]"></div>
        <motion.div
          className="absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-yellow-500/30 via-amber-500/30 to-orange-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="h-screen max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
            <motion.div
              className="mb-8 relative"
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
              <motion.img 
                src="/assets/logo.png" 
                alt="Ethical Bytes Logo" 
                className="h-40 w-40 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(255,255,255,0.5)",
                    "0 0 16px rgba(255,255,255,0.5)",
                    "0 0 8px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Welcome to Ethical Bytes!
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Your friendly guide to understanding Artificial Intelligence!
                Let's learn how to use AI safely and responsibly while having
                lots of fun! 🚀
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="px-4 max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <InfoCard
            icon={<Brain className="w-12 h-12 text-yellow-500" />}
            title="What is AI?"
            description="AI is like a smart computer friend that can learn and help us with tasks. It's important to know how to use it safely!"
            color="bg-gradient-to-br from-yellow-500/10 to-amber-500/10"
            iconBg="bg-yellow-100"
          />
          <InfoCard
            icon={<Shield className="w-12 h-12 text-amber-500" />}
            title="Stay Safe with AI"
            description="Never share personal information with AI and always have a grown-up nearby when using AI tools."
            color="bg-gradient-to-br from-amber-500/10 to-orange-500/10"
            iconBg="bg-amber-100"
          />
          <InfoCard
            icon={<Heart className="w-12 h-12 text-orange-500" />}
            title="Be Kind & Honest"
            description="Use AI to help others and always be honest about using AI-created content."
            color="bg-gradient-to-br from-orange-500/10 to-red-500/10"
            iconBg="bg-orange-100"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 rounded-2xl p-8 shadow-lg mb-16 backdrop-blur-sm"
        >
          <motion.h2
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 mb-6"
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
            Why Learn About AI?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <LearningPoint
              icon={<Star className="w-8 h-8 text-yellow-500" />}
              title="Future Ready"
              description="AI is becoming a big part of our world. Learning about it now helps you prepare for the future!"
            />
            <LearningPoint
              icon={<Brain className="w-8 h-8 text-orange-500" />}
              title="Make Smart Choices"
              description="Knowing how AI works helps you use it wisely and safely."
            />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <FeatureCard
            title="Start Your AI Adventure"
            description="Join us on an exciting journey to learn about AI through fun activities and games!"
            imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
          />
          <FeatureCard
            title="Learn & Play Together"
            description="Explore our interactive games and activities that make learning about AI fun!"
            imageUrl="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?auto=format&fit=crop&w=800&q=80"
          />
        </motion.div>

        <motion.div
          className="mt-16 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-200"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-orange-800 mb-4">Remember!</h3>
          <ul className="text-orange-700 text-lg space-y-2">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              • Always use AI with a grown-up nearby
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              • Keep your personal information private
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              • Think carefully about AI's suggestions
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              • Have fun while staying safe!
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

function InfoCard({
  icon,
  title,
  description,
  color,
  iconBg,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  iconBg: string;
}) {
  const [isHovered, _setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className={`${color} rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden backdrop-blur-sm border border-white/10 group`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <motion.div
        className={`${iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}
        animate={isHovered ? {
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1.1, 1],
        } : {}}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">{description}</p>
    </motion.div>
  );
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
      className="p-4 rounded-lg bg-white/50 backdrop-blur-sm"
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="flex items-center mb-2"
        whileHover={{ x: 5 }}
      >
        <motion.div 
          className="mr-3"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </motion.div>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

function FeatureCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
        animate={{
          opacity: isHovered ? 0.9 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
        <motion.h3 
          className="text-2xl font-bold mb-2"
          animate={{
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-white/90"
          initial={{ opacity: 0.8, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Home;
