// src/services/openAI.js

// MOCK version for now
export async function getCareerRecommendations(quizData) {
  // Simulate a delay to mimic API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        careers: [
          {
            title: "Data Scientist",
            description: "Use statistical methods and AI to extract insights from data.",
            skills: ["Python", "Machine Learning", "Data Visualization"],
          },
          {
            title: "UX Designer",
            description: "Design user-friendly digital interfaces based on research.",
            skills: ["Figma", "User Research", "Prototyping"],
          },
        ],
      });
    }, 1000);
  });
}

/*
 UNCOMMENT this when you're ready to use the OpenAI API:

export async function getCareerRecommendations(quizData) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a career advisor bot.",
        },
        {
          role: "user",
          content: `Based on the following quiz answers: ${JSON.stringify(quizData)}, suggest 2 personalized career paths including the skills required and a short description.`
        }
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
*/
