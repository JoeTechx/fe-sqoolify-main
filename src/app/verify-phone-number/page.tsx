"use client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import OtpInput from "react-otp-input";
import { useUserPhoneStore } from "@/zustand/PhoneStore";
import { useUserStore } from "@/zustand/userStore";
import { registerUser } from "@/components/Api";

export default function VerifyPhoneNumber() {
  const router = useRouter();
  const phoneNumber = useUserPhoneStore((state) => state.phoneNumber);
  const { user, setUser } = useUserStore(); // Fetch user data from Zustand store
  const [otp, setOtp] = useState(" ");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const maskPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber || phoneNumber.length < 7) return phoneNumber;
    return phoneNumber.slice(0, 4) + "****" + phoneNumber.slice(-3);
  };

  const handleVerify = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "User data not found.",
        duration: 3000,
      });
      return;
    }

    setLoading(true);

    try {
      const updatedUser = { ...user, verificationCode: otp };
      setUser(updatedUser); // Update the user store with the verification code

      const isRegistered = await registerUser(updatedUser);

      if (isRegistered) {
        toast({
          variant: "default",
          title: "Success",
          description: "Registration successful!",
          duration: 3000,
        });
        router.push("/onboarding"); // Redirect to onboarding page
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Registration failed. Please try again.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error registering user:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while registering.",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div className="flex flex-col items-center">
        <h2 className="text-primaryColor font-bold text-[28px]">
          Verify your Phone number
        </h2>
        <p className="text-[#515B6F] font-normal text-[18px]">
          We sent an OTP to{" "}
          {phoneNumber ? maskPhoneNumber(phoneNumber) : "your number"} via SMS
          and WhatsApp.
        </p>
      </div>

      <div>
        <span>Enter OTP Code</span>
        <OtpInput
          containerStyle="flex gap-[1.5rem] justify-center items-center"
          value={otp}
          onChange={setOtp}
          inputType="text"
          numInputs={4}
          renderSeparator={<span></span>}
          renderInput={(props) => (
            <input
              {...props}
              style={styles.input}
              className="w-[9rem] text-[1.5rem] text-center border-2 border-[#ccc] rounded-[5px] m-0 mx-1"
            />
          )}
          placeholder="0000"
          onPaste={(e) => e.preventDefault()}
        />
        <div>
          <Button
            onClick={handleVerify}
            className="bg-primaryColor mt-4 font-semibold text-white w-full py-4 shadow-lg"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </Button>
          <small>
            Didn’t get the code? <span>Click Resend</span>
          </small>
        </div>
      </div>
      <div>
        <p>
          Still not received your OTP? Kindly cross-check your phone number by
          clicking here.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column",
    height: "100vh",
  },
  input: {
    width: "58px",
    height: "58px",
    fontSize: "1.5rem",
    textAlign: "center" as "center",
    border: "2px solid #ccc",
    borderRadius: "5px",
    margin: "0 5px",
  },
};
