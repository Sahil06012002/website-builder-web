const BACKEND_URL = import.meta.env.VITE_API_URL;

export async function getChatResponse(message: string | null) {
  try {
    if (message == null) {
      return {};
    }
    const response = await fetch(`${BACKEND_URL}/chat`, {
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
