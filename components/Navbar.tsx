"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { ArrowRight, Trello } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();

  const isDashboardPage = pathname === "/dashboard";
  const isBoardsPage = pathname.startsWith("/boards/");

  if (isDashboardPage) {
    return (
      <header className="border-b bg-white/80 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container flex items-center justify-between mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center space-x-2">
            <Trello className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900 capitalize">
              Trello Clone
            </span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <UserButton />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b bg-white/80 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container flex items-center justify-between mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center space-x-2">
          <Trello className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            Trello clone
          </span>
        </div>
        {isSignedIn ? (
          <div className="flex flex-col items-end sm:items-center sm:flex-row space-y-1 sm:space-y-0 px-2 sm:space-x-4 ">
            <span className="text-gray-700 text-xs hidden sm:block sm:text-sm">
              Welcome, {user.firstName ?? user.emailAddresses[0].emailAddress}
            </span>
            <Link href="/dashboard">
              <Button className="cursor-pointer text-xs sm:text-sm" size="sm">
                Go to Dashboard <ArrowRight />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-2 sm:space-x-4">
            <SignInButton>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs sm:text-sm capitalize"
              >
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button size="sm" className="text-xs sm:text-sm capitalize">
                Sign up
              </Button>
            </SignUpButton>
          </div>
        )}
      </div>
    </header>
  );
}
