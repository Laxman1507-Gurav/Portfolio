import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiMessageSquare } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// ─── Knowledge Base ──────────────────────────────────────────────────────────
const knowledge: { keywords: string[]; response: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'howdy', 'greetings', 'good morning', 'good evening'],
    response: "👋 Hello! I'm Laxman's portfolio assistant. I can answer questions about his skills, projects, experience, education, and how to contact him. What would you like to know?",
  },
  {
    keywords: ['tell me about laxman'],
    response: "His full name is **Laxman Shantaram Gurav**. He is a passionate about learning new things,building real-world web applications using modern technologies Fullstack Web Developer & creative problem solver based in Pune, Maharashtra, India.",
  },
  {
    keywords: ['tell me more about laxman', 'who is laxman', 'more', 'about laxman'],
    response: "Laxman is a BSc Computer Science graduate from Bharati Vidyapeeth. He enjoys building full-stack projects and constantly learning new technologies to improve his development skills.",
  },
  {
    keywords: ['location', 'address', 'city', 'where', 'pune', 'india'],
    response: "Laxman is based in **Pune, Maharashtra, India**.",
  },
  {
    keywords: ['email', 'mail', 'contact', 'reach', 'message'],
    response: "📧 You can email Laxman at **guravsujal371@gmail.com** or reach him via the Contact section on this portfolio.",
  },
  {
    keywords: ['phone', 'call', 'number', 'mobile'],
    response: "📞 Laxman's phone number is **+91 9322857455**.",
  },
  {
    keywords: ['linkedin'],
    response: "💼 Connect with Laxman on LinkedIn: https://www.linkedin.com/in/laxman-gurav-4b9865404",
  },
  {
    keywords: ['github'],
    response: "🐙 Check out Laxman's code on GitHub: https://github.com/Laxman1507-Gurav",
  },
  {
    keywords: ['instagram'],
    response: "📸 Follow Laxman on Instagram: https://www.instagram.com/sujal_g15",
  },
  {
    keywords: ['social', 'media', 'connect', 'follow'],
    response: "🌐 You can connect with Laxman on:\n• LinkedIn: linkedin.com/in/laxman-gurav-4b9865404\n• GitHub: github.com/Laxman1507-Gurav\n• Instagram: @sujal_g15",
  },
  {
    keywords: ['education', 'degree', 'study', 'college', 'university', 'bsc', 'computer science'],
    response: "🎓 Laxman is a **BSc Computer Science** graduate. He is currently looking to pursue an **MSc in Computer Science** and grow further as a full-stack developer.",
  },
  {
    keywords: ['skill', 'technology', 'tech', 'know', 'expertise', 'proficient'],
    response: "💡 Laxman's skills are:\n\n**Industry Knowledge:** Computer Science, Web Application, MERN Stack, SQL, Java, Project Management, Problem Solving\n\n**Tools & Technology:** HTML, CSS, JavaScript, React.js, Node.js, MongoDB\n\n**Interpersonal Skills:** Communication, Teamwork, Leadership, Team Management, Easily Adaptable",
  },
  {
    keywords: ['mern', 'stack', 'fullstack', 'full stack', 'full-stack'],
    response: "⚡ Laxman specialises in the **MERN Stack** — MongoDB, Express.js, React.js, and Node.js — building complete, scalable web applications from front to back.",
  },
  {
    keywords: ['react', 'frontend', 'front-end', 'front end'],
    response: "⚛️ Laxman is highly skilled in **React.js** for building responsive and dynamic front-end interfaces.",
  },
  {
    keywords: ['node', 'backend', 'back-end', 'back end', 'express', 'server'],
    response: "🖥️ On the backend, Laxman works with **Node.js** and **Express.js** to build robust REST APIs and server-side logic.",
  },
  {
    keywords: ['mongodb', 'database', 'db', 'sql'],
    response: "🗄️ Laxman works with **MongoDB** for NoSQL databases and also has knowledge of **SQL** for relational databases.",
  },
  {
    keywords: ['project', 'work', 'built', 'made', 'developed', 'careplus'],
    response: "🏥 Laxman's featured project is **CarePlus** — a MERN stack-based healthcare management system with features like appointment booking (for adults and children), user authentication, profile management, and medical records handling.\n\n🔗 GitHub: https://github.com/Laxman1507-Gurav/CarePlus",
  },
  {
    keywords: ['service', 'offer', 'provide', 'help'],
    response: "🛠️ Laxman offers the following services:\n\n• **Web Development** — Responsive apps with React, Node.js & more\n• **Cloud Solutions** — Deployment on AWS, GCP, Azure\n• **Quality Testing** — Unit, integration & E2E testing\n• **Big Data Solutions** — Data pipelines & analytics",
  },
  {
    keywords: ['hire', 'freelance', 'available', 'opportunity', 'job', 'work with'],
    response: "🤝 Laxman is open to new opportunities and collaborations! You can reach him at **guravsujal371@gmail.com** or via the Contact section on this site.",
  },
  {
    keywords: ['experience', 'years', 'background'],
    response: "📋 Laxman is a passionate BSc Computer Science graduate with a strong background in software development and problem-solving. He has worked on multiple projects, developing leadership and technical skills under real-world conditions.",
  },
  {
    keywords: ['msc', 'masters', 'future', 'plan', 'goal'],
    response: "🎯 Laxman's goal is to pursue an **MSc in Computer Science** and continue growing as a skilled full-stack developer, taking on impactful real-world projects.",
  },
  {
    keywords: ['leadership', 'team', 'management', 'interpersonal'],
    response: "🌟 Laxman possesses strong interpersonal skills including **Leadership**, **Teamwork**, **Team Management**, **Communication**, and is **Easily Adaptable** — making him a great team player and collaborator.",
  },
  {
    keywords: ['java', 'python', 'language', 'programming'],
    response: "💻 Beyond the web stack, Laxman has programming knowledge in **Java** and is familiar with various CS fundamentals and problem-solving techniques.",
  },
  {
    keywords: ["tell me about laxman", "introduce laxman"],
    response: "Laxman Gurav is a Computer Science graduate passionate about building web applications. He’s a full-stack developer who enjoys creating real-world projects and learning new technologies."
  },
  {
    keywords: ["skills", "what can Laxman do", "technologies Laxman knows", "tech stack"],
    response: "Laxman is skilled in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. His main stack is MERN along with Git and Postman."
  },
  {
    keywords: ["frontend or backend", "Laxman's role", "type of developer"],
    response: "Laxman is a full-stack developer, but he enjoys backend more. He works on both frontend and backend, especially APIs and logic."
  },
  {
    keywords: ["careplus project", "Laxman's project", "main project", "tell me about project"],
    response: "CarePlus is a healthcare system where users can book appointments and manage profiles. It includes role-based access for admin, doctors, and patients."
  },
  {
    keywords: ["project tech", "technologies used", "stack of project"],
    response: "Laxman used MongoDB, Express, React, and Node.js. The project is built using the MERN stack."
  },
  {
    keywords: ["project challenges", "difficulties", "problems faced"],
    response: "Managing multiple user roles and real-time data was challenging. Laxman solved it using structured APIs and proper state management."
  },
  {
    keywords: ["what did laxman learn", "learning", "skills gained"],
    response: "Laxman learned full-stack development, authentication, and API design. It improved his ability to build real-world applications."
  },
  {
    keywords: ["Laxman's strengths", "strength"],
    response: "Laxman is a quick learner and adapts easily. He can work under pressure and continuously improve."
  },
  {
    keywords: ["Laxman's weakness", "weakness"],
    response: "Laxman sometimes takes on too many tasks but he’s improving his time management. He’s learning to prioritize better."
  },
  {
    keywords: ["why hire Laxman", "why should we hire Laxman"],
    response: "Laxman is a fast learner with hands-on experience in real projects. He’s passionate about development and always improving."
  },
  {
    keywords: ["are you human", "are you real"],
    response: "Not exactly 😄 I’m a chatbot representing Laxman. I try to respond like a human, but I’m still a bot."
  },
  {
    keywords: ["do you sleep"],
    response: "Nope, I’m always available 😄 I don’t sleep, but my developer definitely does!"
  },
  {
    keywords: ["tell me a joke", "make me laugh"],
    response: "Why do programmers hate nature? Too many bugs 🐛😄"
  },
  {
    keywords: ["tell me another joke", "make me laugh again", "another one", "another joke", 'another'],
    response: "Why do Java developers wear glasses? Because they don’t C# 😄"
  },
  {
    keywords: ["show projects", "Laxman's work", "portfolio", "project", "projects"],
    response: "Check the Projects section in the portfolio. CarePlus is one of Laxman's main highlighted projects."
  },
  {
    keywords: ["contact Laxman", "reach Laxman", "contact details", "how can I contact Laxman", "how to contact Laxman"],
    response: "You can reach Laxman via the contact section or LinkedIn. Feel free to connect with Laxman through email or LinkedIn."
  },
  {
    keywords: ['resume', 'cv', 'download resume', 'download cv', 'show resume', 'show cv'],
    response: "📄 You can download Laxman's resume here: [Download Resume](/MYResume.pdf). You can also review it in the Experience section of the portfolio.",
  },
  {
    keywords: ['thank', 'thanks', 'appreciate', 'great', 'awesome', 'helpful'],
    response: "😊 You're welcome! Feel free to ask me anything else about Laxman. I'm here to help!",
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later', 'farewell'],
    response: "👋 Goodbye! Don't hesitate to come back if you have more questions about Laxman. Have a great day! 😊",
  },
];

const getResponse = (input: string): string => {
  const lower = input.toLowerCase().trim();

  for (const entry of knowledge) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.response;
    }
  }

  return "🤔 I'm not sure about that. You can ask me about Laxman's **skills**, **projects**, **education**, **services**, **contact info**, or **social media**. What would you like to know?";
};

// ─── Component ───────────────────────────────────────────────────────────────
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm Laxman's AI assistant. Ask me anything about his skills, projects, education, or how to contact him!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: Date.now(), text, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  const sendQuickQuestion = (q: string) => {
    const userMsg: Message = { id: Date.now(), text: q, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getResponse(q),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  const formatText = (text: string) => {
    // Regex for Markdown links [text](url)
    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    // Regex for URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split('\n').map((line, i, arr) => {
      // First handle markdown links
      let lastIndex = 0;
      const elements = [];
      let match;

      while ((match = mdLinkRegex.exec(line)) !== null) {
        // Push text before match
        if (match.index > lastIndex) {
          elements.push(line.substring(lastIndex, match.index));
        }
        
        const linkText = match[1];
        const linkUrl = match[2];

        elements.push(
          <a
            key={`${i}-${match.index}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={linkUrl.endsWith('.pdf')}
            className="underline font-semibold text-accent dark:text-white hover:opacity-80 transition-opacity break-all"
          >
            {linkText}
          </a>
        );
        lastIndex = mdLinkRegex.lastIndex;
      }

      // Handle remaining text and plain URLs
      const remainingText = line.substring(lastIndex);
      const parts = remainingText.split(urlRegex);

      return (
        <span key={i}>
          {elements}
          {parts.map((part, j) => {
            if (urlRegex.test(part)) {
              return (
                <a
                  key={j}
                  href={part}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold text-accent dark:text-white hover:opacity-80 transition-opacity break-all"
                >
                  {part}
                </a>
              );
            }
            const boldParts = part.split(/\*\*(.*?)\*\*/g);
            return boldParts.map((bp, k) =>
              k % 2 === 1 ? <strong key={k}>{bp}</strong> : bp
            );
          })}
          {i < arr.length - 1 && <br />}
        </span>
      );
    });
  };

  const quickQuestions = ['Skills', 'Projects', 'Contact', 'Education', 'Services'];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full bg-accent text-primary dark:bg-white dark:text-black flex items-center justify-center shadow-2xl border border-border"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: ['0 0 0 0 rgba(var(--color-accent) / 0.2)', '0 0 0 14px rgba(var(--color-accent) / 0)', '0 0 0 0 rgba(var(--color-accent) / 0)'] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <FiX size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <FiMessageSquare size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-24 z-50 w-auto sm:w-[400px] bg-primary rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
            style={{ maxHeight: 'min(85vh, 650px)' }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="bg-accent dark:bg-white px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 dark:bg-black/10 flex items-center justify-center text-primary dark:text-black">
                <FaRobot size={18} />
              </div>
              <div>
                <p className="text-primary dark:text-black font-bold text-sm">Laxman's AI Assistant</p>
                <p className="text-primary/70 dark:text-black/70 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Online & Ready
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-accent dark:bg-white flex items-center justify-center text-primary dark:text-black mr-2 mt-1 flex-shrink-0">
                      <FaRobot size={12} />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                      ? 'bg-accent text-primary rounded-br-sm'
                      : 'bg-primary text-textPrimary border border-border shadow-sm rounded-bl-sm'
                      }`}
                  >
                    {formatText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="w-7 h-7 rounded-full bg-accent dark:bg-white flex items-center justify-center text-primary dark:text-black mr-2 mt-1 flex-shrink-0">
                    <FaRobot size={12} />
                  </div>
                  <div className="bg-primary border border-border shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                    {[0, 1, 2].map(i => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full bg-accent/60"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="px-4 py-2 bg-primary border-t border-border flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              {quickQuestions.map(q => (
                <button
                  key={q}
                  onClick={() => sendQuickQuestion(q)}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-border text-textSecondary hover:bg-accent hover:text-primary transition-all whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 bg-primary border-t border-border flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-secondary rounded-xl px-4 py-2.5 text-sm text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              />
              <motion.button
                onClick={sendMessage}
                className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center flex-shrink-0 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                disabled={!input.trim()}
              >
                <FiSend size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
