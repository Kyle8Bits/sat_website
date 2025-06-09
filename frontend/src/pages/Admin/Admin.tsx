import React, { useState } from "react";

const handleSubmitEmailAllow = async (email: string): Promise<any> => {
  try {
    const response = await fetch("http://localhost:1414/submit-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }), // send only email
    });

    const data = await response.json();
    console.log("Server response:", data);
    return data;
  } catch (error) {
    console.error("Email allow failed:", error);
    throw error;
  }
};

const Admin: React.FC = () => {
  // State for the input value
  const [inputEmail, setInputEmail] = useState("");

  const submitEmailAllow = async () => {
    if (!inputEmail) return;

    try {
      const result = await handleSubmitEmailAllow(inputEmail);
      console.log("Backend replied:", result);
    } catch (err) {
      console.error("Error during submit:", err);
    }

    setInputEmail("");
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg min-w-[300px]">
        <h2 className="text-center mb-6 text-gray-800 text-xl font-semibold">Admin Input Panel</h2>
        <div className="flex gap-2">
          <input
            type="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Enter email to allow:"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button onClick={submitEmailAllow} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
