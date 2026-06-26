export default function GenerateButton({
  onClick,
  loading
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
        px-10
        py-4
        rounded-full
        bg-black
        text-white
      "
    >
      {loading ? (
  <>
    ✨ Creating Lesson...
  </>
) : (
  <>
    🚀 Let's Build
  </>
)}
    </button>
  );
}