export default function DifficultySelect({
  difficulty,
  setDifficulty
}) {
  return (
    <select
      value={difficulty}
      onChange={(e) => setDifficulty(e.target.value)}
      className="
        w-40
        rounded-xl
        border
        p-3
      "
    >
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </select>
  );
}