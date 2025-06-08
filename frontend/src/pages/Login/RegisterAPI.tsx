export const handleRegister = async (email: string, password: string, passwordConfirm: string, nickname: string, phone: string): Promise<any> => {
  try {
    const response = await fetch("http://localhost:1414/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email,password,passwordConfirm,nickname,phone }),
    });

    const data = await response.json();
    console.log("Server response:", data);
    return data;
  } catch (error) {
    console.error("Register failed:", error);
    throw error;
  }
};
