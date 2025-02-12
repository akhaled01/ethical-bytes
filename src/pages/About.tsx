import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Mail } from "lucide-react";

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        About AI Buddy
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Users className="w-12 h-12 text-blue-500" />
          <h2 className="text-2xl font-bold">Our Mission</h2>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          AI Buddy was created to help kids understand artificial intelligence
          in a fun and safe way. We believe that learning about AI early helps
          prepare children for a future where AI is part of everyday life.
        </p>
        <div className="flex items-center gap-2 text-blue-600">
          <Heart className="w-6 h-6" />
          <span className="font-medium">Made with love for curious minds</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <TeamMember
          name="AI Buddy Bot"
          role="Your Learning Assistant"
          description="Hi! I'm here to help you learn about AI in a fun way. I love explaining complex things simply!"
          imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80"
        />

        <TeamMember
          name="Safety Scout"
          role="Safety Guardian"
          description="I make sure all our content is kid-friendly and safe. I help you learn how to use AI responsibly!"
          imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 p-6 bg-blue-50 rounded-xl border-2 border-blue-200 text-center"
      >
        <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
        <p className="text-gray-600">
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
  description,
  imageUrl,
}: {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default About;
