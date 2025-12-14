"use client";

import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";

export default function dashboard() {
  const { user } = useUser();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container flex mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="font-bold text-2xl sm:text-3xl mb-2 text-gray-900">
            Welcome back, {user?.firstName}! 👋🏻
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your boards today.
          </p>
        </div>
      </main>
    </div>
  );
}
