import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Notebook as Robot, Brain, Shield, Heart, Star, Sparkles } from 'lucide-react';

function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="max-w-6xl mx-auto text-center">
      {/* Hero Banner */}
      <motion.div 
        className="relative h-[500px] -mx-4 mb-16 overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity,
          scale
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 via-amber-500/90 to-orange-500/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
            <motion.div 
              className="mb-8 relative"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Robot className="h-32 w-32 text-white" />
              <motion.div
                className="absolute -right-4 -top-4"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="h-8 w-8 text-yellow-300" />
              </motion.div>
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
                    "0 0 8px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
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
                Your friendly guide to understanding Artificial Intelligence! Let's learn how to use AI safely and responsibly while having lots of fun! 🚀
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <InfoCard
            icon={<Brain className="w-12 h-12 text-yellow-500" />}
            title="What is AI?"
            description="AI is like a smart computer friend that can learn and help us with tasks. It's important to know how to use it safely!"
            color="bg-gradient-to-br from-yellow-100 to-amber-200"
            iconBg="bg-yellow-100"
          />
          <InfoCard
            icon={<Shield className="w-12 h-12 text-amber-500" />}
            title="Stay Safe with AI"
            description="Never share personal information with AI and always have a grown-up nearby when using AI tools."
            color="bg-gradient-to-br from-amber-100 to-amber-200"
            iconBg="bg-amber-100"
          />
          <InfoCard
            icon={<Heart className="w-12 h-12 text-orange-500" />}
            title="Be Kind & Honest"
            description="Use AI to help others and always be honest about using AI-created content."
            color="bg-gradient-to-br from-orange-100 to-orange-200"
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
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% auto',
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
            >• Always use AI with a grown-up nearby</motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >• Keep your personal information private</motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >• Think carefully about AI's suggestions</motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >• Have fun while staying safe!</motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, description, color, iconBg }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  iconBg: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${color} rounded-xl p-6 shadow-lg border-2 border-opacity-50`}
    >
      <div className={`${iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

function LearningPoint({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md"
    >
      <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
}

function FeatureCard({ title, description, imageUrl }: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-2">
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
}

export default Home;