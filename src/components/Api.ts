import { User } from "@/zustand/userStore";

// export const verifyOTP = async (otp: string) => {
//   const response = await fetch("/api/verify-otp", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ otp }),
//   });
//   return response.ok; // Return true if verification is successful
// };


export const sendOTP = async (phoneNumber: string) => {
  const response = await fetch("http://194.146.13.57:3000/v1/auth/sent-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNumber }),
  });
  return response.ok; // Return true if OTP is successfully sent
};

export const registerUser = async (user: User) => {
  const response = await fetch("http://194.146.13.57:3000/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.ok; // Return true if registration is successful
};