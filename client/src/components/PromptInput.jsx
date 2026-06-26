export default function PromptInput({
  topic,
  setTopic
}) {
  return (
    <textarea
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      placeholder="What would you like to teach today?"
      className="
        w-full
        h-56
        rounded-3xl
        border
        p-6
        text-2xl
        shadow-lg
        resize-none
      "
    />
  );
}