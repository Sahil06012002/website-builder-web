export async function getChatResponse(prompt: string) {
  try {
    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch chat response");
    }
    const data = await response.json();
    return data.answer;
  } catch (err) {
    console.error("Error fetching chat response:", err);
    return "Something went wrong while generating a response.";
  }
}
