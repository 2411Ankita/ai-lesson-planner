const { InferenceClient } = require("@huggingface/inference");

const client = new InferenceClient(
  process.env.HF_TOKEN
);

async function generateLesson(
  topic,
  difficulty,
  action
) {

  let prompt = "";

  if (!action) {

    prompt = `
You are an experienced curriculum developer.

Create a ${difficulty.toLowerCase()} lesson plan.

Topic: ${topic}

Include:
1. Learning Objectives
2. Lesson Plan
3. Quiz Questions
4. Answer Key
`;

  }

  else if (action === "Quiz") {

    prompt = `
Create 10 quiz questions with answers.

Topic: ${topic}
Difficulty: ${difficulty}
`;

  }

  else if (action === "Activities") {

    prompt = `
Create 5 classroom activities.

Topic: ${topic}
Difficulty: ${difficulty}
`;

  }

  else if (action === "Resources") {

    prompt = `
Recommend learning resources.

Topic: ${topic}

Include:
- Books
- Websites
- Videos
`;

  }

  else if (action === "Homework") {

    prompt = `
Create a homework assignment.

Topic: ${topic}
Difficulty: ${difficulty}
`;

  }

  else if (action === "Assessment") {

    prompt = `
Create an assessment rubric.

Topic: ${topic}
Difficulty: ${difficulty}
`;

  }

  const response =
    await client.chatCompletion({
      model: "Qwen/Qwen2.5-7B-Instruct",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 1200
    });

  return response.choices[0].message.content;
}

module.exports = {
  generateLesson
};