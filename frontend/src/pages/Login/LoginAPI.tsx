export const handleLogin = async (email: string, password: string): Promise<any> => {
  try {
    const response = await fetch("http://localhost:1414/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Server response:", data);
    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
