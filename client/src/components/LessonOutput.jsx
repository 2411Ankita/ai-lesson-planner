import ReactMarkdown from "react-markdown";

export default function LessonOutput({ lesson }) {

  if (!lesson) return null;

  return (
    <div className="mt-12">
      <div
        className="
          bg-white
          rounded-[32px]
          shadow-2xl
          p-10
          max-w-4xl
          mx-auto
        "
      >
        <ReactMarkdown
          components={{
            h1: ({children}) => (
              <h1 className="text-4xl font-bold mb-6">
                {children}
              </h1>
            ),

            h2: ({children}) => (
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                {children}
              </h2>
            ),

            p: ({children}) => (
              <p className="text-lg leading-8">
                {children}
              </p>
            ),

            li: ({children}) => (
              <li className="mb-2">
                {children}
              </li>
            )
          }}
        >
          {lesson}
        </ReactMarkdown>
      </div>
    </div>
  );
}