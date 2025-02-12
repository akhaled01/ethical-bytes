import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Brain,
  Shield,
  Notebook as Robot,
  Sparkles,
  BookOpen,
} from "lucide-react";

function CaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-6">AI in Action</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Let's explore amazing ways AI helps make our world better! These are
          real examples of AI being used responsibly.
        </p>
      </motion.div>

      <div className="space-y-12">
        <CaseStudy
          title="AI Helping Doctors"
          icon={<Stethoscope className="w-12 h-12 text-blue-500" />}
          description="Meet Dr. Bot! It helps doctors find illnesses faster by looking at X-rays and test results. It's like having a super-smart assistant that never gets tired!"
          imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
          benefits={[
            "Helps find illnesses faster",
            "Makes fewer mistakes",
            "Gives doctors more time with patients",
            "Works 24/7 to help people",
          ]}
          safetyMeasures={[
            "Doctors always check AI's work",
            "Keeps patient information private",
            "Only used by trained professionals",
            "Regular safety updates",
          ]}
        />

        <CaseStudy
          title="AI Learning Helper"
          icon={<Brain className="w-12 h-12 text-purple-500" />}
          description="AI tutors help students learn at their own pace. They can explain things in different ways and give extra practice when needed."
          imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
          benefits={[
            "Adapts to how you learn best",
            "Available anytime for help",
            "Makes learning fun and interactive",
            "Gives helpful feedback",
          ]}
          safetyMeasures={[
            "Parents can monitor progress",
            "No personal information needed",
            "Safe, kid-friendly content only",
            "Human teachers still lead the way",
          ]}
        />

        <CaseStudy
          title="AI Safety Guard"
          icon={<Shield className="w-12 h-12 text-green-500" />}
          description="AI helps keep the internet safe by spotting and blocking bad content before it reaches kids."
          imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
          benefits={[
            "Blocks harmful content",
            "Protects against online bullying",
            "Keeps personal info safe",
            "Works quickly to stop threats",
          ]}
          safetyMeasures={[
            "Regular updates for new threats",
            "Human moderators double-check",
            "Parents can set controls",
            "Reports suspicious activity",
          ]}
        />

        <CaseStudy
          title="Creative AI Assistant"
          icon={<Sparkles className="w-12 h-12 text-yellow-500" />}
          description="AI helps artists and writers be more creative by suggesting ideas and helping with simple tasks."
          imageUrl="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80"
          benefits={[
            "Helps with creative ideas",
            "Makes art more accessible",
            "Saves time on simple tasks",
            "Teaches new techniques",
          ]}
          safetyMeasures={[
            "Artists maintain creative control",
            "Clear labeling of AI-assisted work",
            "Respects copyright rules",
            "Age-appropriate content only",
          ]}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          What We've Learned
        </h2>
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
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  imageUrl: string;
  benefits: string[];
  safetyMeasures: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            {icon}
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </div>
          <p className="text-gray-600 text-lg mb-6">{description}</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-blue-600 mb-2">Benefits:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-green-600 mb-2">
                Safety Measures:
              </h3>
              <ul className="space-y-2">
                {safetyMeasures.map((measure, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
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
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-50 p-3 rounded-full mb-4">{icon}</div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default CaseStudies;
