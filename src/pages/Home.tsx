import React, { useEffect } from "react";
import { useNavbar } from "@/context/NavbarContext";
import { motion } from "framer-motion";
import { Brain, Shield, Heart, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const { setIsTransparent } = useNavbar();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTransparent(scrollPosition < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsTransparent]);
  return (
    <div className="text-center">
      {/* Hero Banner */}
      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-yellow-700 via-amber-500 to-orange-800 dark:from-purple-950 dark:via-purple-900 dark:to-purple-800 transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/assets/img1.png')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.3)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.5)_100%)]"></div>
        <div className="absolute inset-0 backdrop-blur-sm">
          <div className="h-screen max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center">
            <div className="mb-8 relative">
              <img
                src="/assets/logo.png"
                alt="Ethical Bytes Logo"
                className="h-40 w-40 object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_0_30px_rgba(59,130,246,0.7)]"
              />
            </div>

            <div className="px-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono filter drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] whitespace-nowrap">
                Welcome to Ethical Bytes!
              </h1>

              <p className="text-2xl text-white/90 mb-8 max-w-4xl mx-auto font-mono filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] text-center">
                Your friendly guide to understanding Artificial Intelligence!
              </p>

              <Link 
                to="/principles" 
                className="inline-flex items-center px-6 py-3 text-lg font-mono text-white bg-orange-500 dark:bg-purple-700 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-orange-600 dark:hover:bg-purple-800 group"
              >
                <span>Explore AI Principles</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-6xl mx-auto py-4">
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

        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        > */}
        {/* <FeatureCard
            title="Start Your AI Adventure"
            description="Join us on an exciting journey to learn about AI through fun activities and games!"
            imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
          />
          <FeatureCard
            title="Learn & Play Together"
            description="Explore our interactive games and activities that make learning about AI fun!"
            imageUrl="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?auto=format&fit=crop&w=800&q=80"
          /> */}
        {/* </motion.div> */}

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
  hover: { scale: 1.05, transition: { duration: 0.2 } },
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
      className={`${color} dark:bg-opacity-20 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden backdrop-blur-sm border border-white/10 dark:border-white/20 group`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <motion.div
        className={`${iconBg} dark:bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}
        animate={
          isHovered
            ? {
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1],
              }
            : {}
        }
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-3 text-black/90 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-black/70 dark:text-white/90 group-hover:text-black/90 dark:group-hover:text-white transition-colors duration-300 leading-relaxed">
        {description}
      </p>
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
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div className="flex items-center mb-2" whileHover={{ x: 5 }}>
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

export default Home;
