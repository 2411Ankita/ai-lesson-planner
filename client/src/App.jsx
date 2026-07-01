console.log(import.meta.env);
import { useState } from "react";

import Hero from "./components/Hero";
import LessonOutput from "./components/LessonOutput";
import ActionChips from "./components/ActionChips";

import { Sparkles, BarChart3 } from "lucide-react";

export default function App() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [lesson, setLesson] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionResult, setActionResult] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
const [actionLoading, setActionLoading] = useState(false);
const [showCustomInput, setShowCustomInput] = useState(false);
const handleActionSelect = async (action) => {

   setSelectedAction(action);
   setActionLoading(true);

   try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/generate`,
        {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
             topic,
             difficulty,
             action
          })
        }
      );

      const data = await response.json();

      setActionResult(data.lesson);

   } catch(err){
      console.error(err);
   }

   setActionLoading(false);

};
const handleGenerate = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            topic,
            difficulty
          })
        }
      );

      const data = await response.json();
      setLesson(data.lesson);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">

      <Hero />

      {/* CENTER BLOCK */}
    <div className="flex justify-center mt-10">

      <div className="w-[60%] bg-white shadow-xl rounded-3xl p-6 border">

          {/* INPUT */}
        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="What would you like to teach today?"
          rows={1}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height =
              Math.min(e.target.scrollHeight, 160) + "px";
          }}
          className="
            w-full
            resize-none
            outline-none
            text-lg
            max-h-40
            overflow-y-auto
          "
        />

          {/* BOTTOM ROW */}
        <div className="flex items-center mt-6">

          {/* LEFT → Difficulty */}
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-violet-600" />

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="border rounded-xl px-3 py-2 text-sm"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

            {/* CENTER → BUTTON */}
          <div className="flex-1 flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={loading || !topic}
              className="
                px-8 py-2
                rounded-full
                bg-gradient-to-r from-violet-600 to-blue-600
                text-white
                font-medium
                hover:opacity-90
              "
            >
              {loading ? "Generating..." : "🚀 Generate Lesson Plan"}
            </button>
          </div>

          </div>

        </div>
      </div>

      {/* ACTIONS */}
      
      <LessonOutput lesson={lesson} />

    {lesson && (
      <ActionChips onSelect={handleActionSelect} />
    )}

    {actionResult && (
      <LessonOutput lesson={actionResult} />
    )}

    </div>
  );
}