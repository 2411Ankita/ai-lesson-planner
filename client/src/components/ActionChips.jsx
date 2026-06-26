export default function ActionChips({ onSelect }) {

const actions = [
  {
    icon: "❓",
    title: "Quiz",
    description: "Generate assessment questions"
  },
  {
    icon: "🎨",
    title: "Activities",
    description: "Hands-on classroom activities"
  },
  {
    icon: "📚",
    title: "Resources",
    description: "Books, videos and references"
  },
  {
    icon: "📊",
    title: "Assessment",
    description: "Evaluate student understanding"
  },
  {
    icon: "🏠",
    title: "Homework",
    description: "Create take-home assignments"
  },
  {
    icon: "✨",
    title: "Other",
    description: "Custom teaching support"
  }
];

  return (
    <div className="mt-12">

      <h3 className="text-center text-2xl font-semibold mb-2">
        What would you like next?
      </h3>

      <p className="text-center text-gray-500 mb-8">
        Continue building your lesson
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => onSelect(action.title)}
            className="
              bg-white
              p-6
              rounded-3xl
              border
              border-gray-200
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              text-left
            "
          >
            <h4 className="font-semibold text-lg">
              {action.title}
            </h4>

            <p className="text-gray-500 text-sm mt-2">
              {action.description}
            </p>
          </button>
        ))}

      </div>

    </div>
  );
}
