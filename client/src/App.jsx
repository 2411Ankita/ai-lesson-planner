import { useState } from "react";

import Hero from "./components/Hero";
import PromptInput from "./components/PromptInput";
import DifficultySelect from "./components/DifficultySelect";
import GenerateButton from "./components/GenerateButton";
import LessonOutput from "./components/LessonOutput";
import ActionChips from "./components/ActionChips";

export default function App() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [lesson, setLesson] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [actionResult, setActionResult] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [showCustomInput, setShowCustomInput] =
  useState(false);
  const handleGenerate = async () => {
  setLoading(true);

  try {
    const response = await fetch(
      "http://localhost:5000/api/generate",
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
const handleActionSelect = async (action) => {

  console.log("Button clicked:", action);

  setSelectedAction(action);
  setActionLoading(true);

  try {

    console.log("Sending request...");

    const response = await fetch(
      "VITE_API_URL=https://ai-lesson-planner-affr.onrender.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          topic,
          difficulty,
          action
        })
      }
    );

    console.log("Response received");

    const data = await response.json();

    console.log(data);

    setActionResult(data.lesson);

  } catch (err) {

    console.error("ERROR:", err);

  }

  setActionLoading(false);
};
return(
<div className="
    min-h-screen
    bg-gradient-to-b
    from-slate-50
    via-white
    to-blue-50
  "
>

    <div className="max-w-5xl mx-auto px-6 pb-20">

  <Hero />

  <div className="mt-12">
    <PromptInput
      topic={topic}
      setTopic={setTopic}
    />
  </div>

  <div className="mt-6 flex flex-col items-center gap-6">

    <DifficultySelect
      difficulty={difficulty}
      setDifficulty={setDifficulty}
    />

    <GenerateButton
  onClick={handleGenerate}
  loading={loading}
/>
  </div>

  <LessonOutput
    lesson={lesson}
  />
{
  lesson && (
    <ActionChips onSelect={handleActionSelect} />
  )
}

{
  actionResult && (
    <LessonOutput lesson={actionResult} />
  )
}
{
  showCustomInput && (
    <div className="mt-6 flex justify-center">

      <input
        type="text"
        placeholder="What would you like help with?"
        className="
          w-full
          max-w-xl
          border
          rounded-full
          px-6
          py-4
        "
      />

    </div>
  )
}
</div>
</div>
);
}