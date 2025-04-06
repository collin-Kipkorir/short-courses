"use client";
import { Navbar } from './Navbar'; // Adjust the path if needed
import { useState } from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Laptop, MousePointer } from "lucide-react";


const topicNotes: Record<string, JSX.Element> = {
  "Introduction to Computers": (
    <div className="space-y-2">
      <p className="mt-2 space-y-2">
        <strong>1. What is a Computer?</strong><br />
        A computer is an electronic device...
      </p>
    </div>
  ),
  "Microsoft Word": (
    <div className="space-y-2">
      <p><strong>What is MS Word?</strong><br />
      MS Word is a word processor for creating documents like letters...</p>
    </div>
  ),
  "Microsoft Excel": (
    <div className="space-y-2">
      <p><strong>What is MS Excel?</strong><br />
      Excel is a spreadsheet application for organizing...</p>
    </div>
  ),
  // Add other topics similarly...
};

export default function CoursePage() {
  const [isPaid, setIsPaid] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [questionAnswer, setQuestionAnswer] = useState("");
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  
  const [showVideo, setShowVideo] = useState<{ [key: string]: boolean }>({});
  const toggleVideo = (topic: string) => {
    setShowVideo((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };
  
  
  const topics = [
    "Introduction to Computers",
    "Microsoft Windows",
    "Keyboarding and Typing",
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Microsoft Access",
    "Microsoft Publisher",
    "Internet & Email",
  ];

  const toggleTopic = (topic: string) => {
    setExpandedTopic(expandedTopic === topic ? null : topic);
  };

  const markTopicComplete = (topic: string) => {
    if (!completedTopics.includes(topic)) {
      setCompletedTopics([...completedTopics, topic]);
    }
  };

  const allTopicsCompleted = completedTopics.length === topics.length;

  const handlePayment = () => setTimeout(() => setIsPaid(true), 2000);
  const handleCompleteCourse = () => {
    setCompleted(true);
    setQuizSubmitted(true);
  };
 
  
  return (
    <div className="min-w-screen p-2">
      {/* Navbar */}
      <Navbar />
  
      {/* Main Container */}
      <div className="mt-15 px-2 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="relative flex flex-col items-start py-2 px-2 mb-3 min-h-[250px] rounded-2xl overflow-hidden shadow-xl bg-white">
          <div
            className="absolute inset-0 bg-cover bg-start opacity-30"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/8524940/pexels-photo-8524940.jpeg?auto=compress&cs=tinysrgb&w=600')",
            }}
          ></div>
          <div className="relative z-5 text-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-md">
              Computer Packages Short Course
            </h1>
            <p className="text-lg text-gray-800 mt-4 font-medium max-w-2xl mx-auto">
              Complete the course to earn your certificate instantly!
            </p>
  
            <h2
              className="text-3xl font-bold text-gray-900 mt-10"
              id="course-topics"
            >
              📖 Course Topics
            </h2>
            <p className="text-md text-gray-700 mt-2">
              Click a topic to view detailed lessons and materials.
            </p>
          </div>
        </div>
  
        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-4 mt-4 shadow-inner">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${(completedTopics.length / topics.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-right mt-2 text-green-600 mb-3">
          {completedTopics.length} of {topics.length} Completed
        </p>
      </div>
    
  
   
      {/* Course Topics Section */}
      <section id="course-topics">
        <div className="space-y-3">
          {topics.map((topic) => {
            const isExpanded = expandedTopic === topic;
            const isCompleted = completedTopics.includes(topic);
            const isVideo = showVideo[topic];

            const getVideoUrl = (topic: string): string => {
              const videoMap: Record<string, string> = {
                "Introduction to Computers": "https://www.youtube.com/embed/Cu3R5it4cQs",
                "Microsoft Windows": "https://www.youtube.com/embed/JDqVXwRthrA",
                "Keyboarding and Typing": "https://www.youtube.com/embed/8Ic2L7ZyFC8",
                "Microsoft Word": "https://www.youtube.com/embed/vmEzxQfVj5c",
                "Microsoft Excel": "https://www.youtube.com/embed/qk6PVi7wZRo",
                "Microsoft PowerPoint": "https://www.youtube.com/embed/k6pg4nZS6fA",
                "Microsoft Access": "https://www.youtube.com/embed/UtMDhwz7vyU",
                "Microsoft Publisher": "https://www.youtube.com/embed/ph0FpFBY9DI",
                "Internet & Email": "https://www.youtube.com/embed/6BVguupxHI0",
              };
              return videoMap[topic] || "https://www.youtube.com/embed/dQw4w9WgXcQ"; // fallback
            };

            return (
              <div
                key={topic}
                className="bg-white bg-opacity-60 backdrop-blur-md rounded-1xl shadow-sm border border-gray-200"
              >
                {/* Toggle Button */}
                <button
                  onClick={() => toggleTopic(topic)}
                  className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-1xl hover:from-blue-100 transition"
                >
                  <span className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    {isCompleted && (
                      <span className="w-5 h-5 flex items-center justify-center bg-green-500 text-white rounded-full text-xs font-bold shadow">
                        ✓
                      </span>
                    )}
                    {topic}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-800 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-2 text-gray-700 text-md bg-white bg-opacity-80 rounded-b-2xl shadow-inner space-y-4">
                        {/* Toggle Video/Notes */}
                        <div className="flex justify-end items-center mb-2">
                          <Button
                            onClick={() => toggleVideo(topic)}
                            className="flex items-center gap-2 text-sm font-medium border p-2 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-colors rounded-1xl shadow-sm"
                            title={isVideo ? "Switch to Notes" : "Switch to Video"}
                          >
                            {isVideo ? "📖 Read Notes Instead" : "▶️ Watch Video Instead"}
                          </Button>
                        </div>

                        {/* Content */}
                        {isVideo ? (
                          <div className="aspect-w-16 aspect-h-9">
                            <iframe
                              className="w-full h-64 rounded-xl"
                              src={getVideoUrl(topic)}
                              title={`YouTube video for ${topic}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        ) : (
                          topicNotes[topic] || (
                            <p className="mt-2 text-sm">
                              Detailed notes on <strong>{topic}</strong> go here.
                            </p>
                          )
                        )}

                        {/* Mark as Complete */}
                        {!isCompleted && (
                          <Button
                            onClick={() => markTopicComplete(topic)}
                            className="mt-2 py-2 p-2 bg-green-500 text-white gravity-end text-xs rounded-lg hover:bg-green-600"
                          >
                            Mark as Complete
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certificate Section */}
      {allTopicsCompleted && completed && !isPaid && (
        <section className="mt-8 bg-yellow-50 p-6 rounded-2xl shadow-lg">
          <p className="text-yellow-700 font-semibold text-center">
            🎉 Course completed! Make a payment to get your certificate.
          </p>
          <Button
            onClick={handlePayment}
            className="mt-4 w-full py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition"
          >
            Pay to Download Certificate
          </Button>
        </section>
      )}

      {/* Certificate Download */}
      {allTopicsCompleted && isPaid && completed && (
        <div className="mt-8 bg-green-50 p-2 rounded-2xl shadow-xl text-center">
          <p className="text-green-700 font-semibold text-2xl">
            ✅ Payment Successful!
          </p>
          <p className="text-gray-700 mt-2">
            Download your certificate below.
          </p>
          <a
            href="/certificate.pdf"
            download
            className="mt-4 inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-green-600 transition"
          >
            🎓 Download Your Certificate
          </a>
        </div>
      )}

      {/* Quiz Section */}
      {allTopicsCompleted && !quizSubmitted && (
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            📝 Test Your Knowledge
          </h2>
          <div className="mt-6 bg-white bg-opacity-80 backdrop-blur-md p-2 rounded-1xl shadow-md">
            <h3 className="text-xl font-semibold">
              What is the function of MS Excel?
            </h3>
            <Input
              type="text"
              value={questionAnswer}
              onChange={(e) => setQuestionAnswer(e.target.value)}
              placeholder="Type your answer here"
              className="w-full p-2 mt-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
            />
            <Button
              onClick={handleCompleteCourse}
              className="mt-4 w-full py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
            >
              Submit Answer
            </Button>
          </div>
        </section>
      )}
      {quizSubmitted && (
        <div className="mt-6 text-center text-green-700 font-semibold">
          ✅ Quiz Submitted! You're now eligible for a certificate.
        </div>
      )}
    </div>
  );
}