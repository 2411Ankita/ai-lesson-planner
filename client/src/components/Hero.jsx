import { useEffect, useState } from "react";

export default function Hero() {
  const greetings = [
    "Hello 👋",
    "नमस्ते 👋",
    "Hola 👋",
    "Bonjour 👋",
    "こんにちは 👋",
    "안녕하세요 👋"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-16">
      <h1 className="text-6xl font-bold mb-4">
        {greetings[index]}
      </h1>

      <h2 className="text-4xl font-semibold">
        AI Lesson Planning Platform
      </h2>

      <p className="text-gray-500 mt-4 text-lg">
        Create engaging lessons, quizzes and activities in seconds.
      </p>
    </div>
  );
}