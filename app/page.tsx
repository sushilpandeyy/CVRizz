"use client";
import React, { useState } from "react";
import axios from "axios";
import { WavyBackground } from "./components/ui/wavy-background";
import { BackgroundBeams } from "./components/ui/background-beams";
import { ButtonsCard } from "./components/ui/tailwindcss-buttons";


export default function Home() {
  const [waitlistEmail, setWaitlistEmail] = useState<string>('');
  const [message, setMessage] = useState<string>("Join the waitlist to get notified about our launch 🚀");

  const addwaitlist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      try {
        const response = await axios.post('/api/waitlist', {
          email: waitlistEmail,
        });
        setMessage(response.data.message);
        setWaitlistEmail('');
      } catch (error:any) {
        const errorMessage = error.response.data.message;
        console.error('Error making the POST request:', error);
        setMessage(errorMessage);
      }
    };

  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          CVRIZZ
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Leverage the power of AI to create beautiful resumes.
        </p>
      </WavyBackground>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl z-30 mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            {message}
          </p>
          <form onSubmit={addwaitlist}>
            <div className="flex">
          <input
          type="text content-center justify-center"
        placeholder="Enter your email"
        value={waitlistEmail}
        onChange={(e) => setWaitlistEmail(e.target.value)}
        className="w-full mt-4 p-2 rounded-lg border border-neutral-800 bg-neutral-950 text-white  placeholder-neutral-700"
      />
        <button type="submit" className="w-20 mt-4 p-2 shadow-[0_0_0_3px_#000000_inset] bg-transparent border focus:border-white dark:text-white text-black rounded-lg font-bold transform">
  Join
</button>
  </div>
</form>

        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
