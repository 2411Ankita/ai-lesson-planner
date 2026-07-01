// import { useEffect, useState } from "react";

// export default function Hero() {
//   const greetings = [
//     "Hello 👋",
//     "नमस्ते 👋",
//     "Hola 👋",
//     "Bonjour 👋",
//     "こんにちは 👋",
//     "안녕하세요 👋"
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % greetings.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="text-center mt-16">
//       <h1 className="text-6xl font-bold mb-4">
//         {greetings[index]}
//       </h1>

//       <h2 className="text-4xl font-semibold">
//         AI Lesson Planning Platform
//       </h2>

//       <p className="text-gray-500 mt-4 text-lg">
//         Create engaging lessons, quizzes and activities in seconds.
//       </p>
//     </div>
//   );
// } version 1 changed on june 29.
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

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
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-10">

      {/* TITLE (center, big) */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-100 text-violet-700 font-medium text-lg">
          <Sparkles size={20} />
          AI Powered Teaching Assistant
        </div>
      </div>

      {/* GREETING (BIG + CENTERED) */}
      <h2 className="mt-6 text-5xl font-bold text-slate-800">
        {greetings[index]}
      </h2>

    </div>
  );
}