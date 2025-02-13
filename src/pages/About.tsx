import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavbar } from "@/context/NavbarContext";
import { Users, Heart, Mail } from "lucide-react";

function About() {
  const { setIsTransparent } = useNavbar();

  useEffect(() => {
    setIsTransparent(false);
  }, [setIsTransparent]);

  return (
    <div className="max-w-4xl mx-auto py-24">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        About AI Buddy
      </h1>

      <div className="bg-white dark:bg-purple-900/40 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-700/50">
        <div className="flex items-center gap-4 mb-6">
          <Users className="w-12 h-12 text-blue-500" />
          <h2 className="text-2xl font-bold">Our Mission</h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          AI Buddy was created to help kids understand artificial intelligence
          in a fun and safe way. We believe that learning about AI early helps
          prepare children for a future where AI is part of everyday life.
        </p>
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
          <Heart className="w-6 h-6" />
          <span className="font-medium">Made with love for curious minds</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <TeamMember
          name="Abdulrahman Idrees"
          role="Frontend Developer"
        />
        <TeamMember
          name="Amani Fardan"
          role="UI/UX Designer"
        />
        <TeamMember
          name="Reem Abbar"
          role="Frontend Developer"
        />
        <TeamMember
          name="Issa"
          role="Backend Developer"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-xl border-2 border-blue-200 dark:border-blue-700/50 text-center backdrop-blur-sm"
      >
        <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Have questions or suggestions? Ask a parent or teacher to help you
          reach out to us!
        </p>
      </motion.div>
    </div>
  );
}

function TeamMember({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-purple-900/40 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-purple-100 dark:border-purple-700/50 transition-all duration-300"
    >
      <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-900 flex items-center justify-center">
        <Users className="w-10 h-10 text-purple-600 dark:text-purple-300" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{name}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium">{role}</p>
    </motion.div>
  );
}

export default About;
