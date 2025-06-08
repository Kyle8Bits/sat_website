import React, { useState } from "react";
import Bg3 from "../../assets/photo/bg_3.png";

const handleRegister = async (email: string, password: string, nickname: string, phone: string, group: number, role: string): Promise<any> => {
  try {
    const response = await fetch("http://localhost:1414/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, nickname, phone, group, role }),
    });

    const data = await response.json();
    console.log("Server response:", data);
    return data;
  } catch (error) {
    console.error("Register failed:", error);
    throw error;
  }
};

function Registration() {
  const [preview, setPreview] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-transparent flex flex-row items-center justify-center min-h-screen">
      <div className="absolute inset-0 -z-1 flex flex-col">
        <img src={Bg3} alt="" className="w-full object-cover h-full" />
      </div>

      <div className="h-full relative w-[40%] bg-gray-500">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">RMIT Student Ambassador Team</h1>
        </div>
      </div>

      <div className="p-[20px] rounded-lg w-[40%] h-fit bg-white">
        <form className="flex flex-col items-center justify-center h-full px-10">
          <h1 className="flex text-3xl mb-10 mt-4 font-bold mb-6">Welcome To SAT</h1>

          {/* Profile Photo Upload Section */}
          <div className="flex flex-col justify-center items-center mb-10 relative group">
            <div className="w-45 h-45 mb-3 rounded-full overflow-hidden border-2 border-gray-300 relative">
              {preview ? (
                <img src={preview} alt="Profile Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">No photo</div>
              )}

              {/* Hover overlay */}
              <label
                htmlFor="profile-photo"
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-semibold cursor-pointer transition-opacity"
              >
                Change photo
              </label>
            </div>

            {/* Hidden file input */}
            <input type="file" id="profile-photo" accept="image/*" onChange={handlePhotoChange} className="hidden" />
          </div>

          <div className="w-full flex flex-col">
            <label className="ml-[1px] text-sm font-bold text-gray-500">
              Your Nickname <span className="text-red-500">*</span>
            </label>
            <input required type="text" placeholder="Username. Ex. Maryn, Pan, etc." className="mb-10 p-3 rounded-lg w-full bg-gray-100 outline-none" />
          </div>

          <div className="w-full flex flex-col">
            <label className="ml-[1px] text-sm font-bold text-gray-500">
              Your Role <span className="text-red-500">*</span>
            </label>
            <select required className="mb-10 p-3 rounded-lg w-full bg-gray-100 outline-none" defaultValue="">
              <option value="" disabled hidden>
                Select Role
              </option>
              <option value="Staff">Staff</option>
              <option value="Leader">Leader</option>
              <option value="Coordinator">Coordinator</option>
            </select>
          </div>

          <div className="w-full flex flex-col">
            <label className="ml-[1px] text-sm font-bold text-gray-500">
              Your Group <span className="text-red-500">*</span>
            </label>
            <select required className="mb-10 p-3 rounded-lg w-full bg-gray-100 outline-none" defaultValue="">
              <option value="" disabled hidden>
                Select Group
              </option>
              <option value="Group 1">Group 1</option>
              <option value="Group 2">Group 2</option>
              <option value="Group 3">Group 3</option>
              <option value="Group 4">Group 4</option>
              <option value="Group 5">Group 5</option>
              <option value="Group 6">Group 6</option>
            </select>
          </div>

          <div className="w-full flex flex-col">
            <label className="ml-[1px] text-sm font-bold text-gray-500">
              Phone Number <span className="text-gray-400">(optional)</span>
            </label>
            <input type="text" placeholder="Phone. Ex. 0912345678" className="mb-10 p-3 rounded-lg w-full bg-gray-100 outline-none" />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
