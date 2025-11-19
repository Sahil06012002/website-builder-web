export async function getChatResponse(message: string | null) {
  try {
    console.log("api hit--->");
    if (message == null) {
      return {};
    }
    const response = await fetch("http://43.205.164.162:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "sail",
        message: message,
      }),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch chat response");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching chat response:", err);
    return "Something went wrong while generating a response.";
  }
}
