"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useBoards } from "@/lib/hooks/useBoards";
import { useUser } from "@clerk/nextjs";
import { Loader2, Plus, Trello } from "lucide-react";

export default function dashboard() {
  const { user } = useUser();

  const { createBoard, error, loading, boards } = useBoards();

  async function handleCreateBoard() {
    await createBoard({ title: "new title added" });
  }

  if (loading) {
    return (
      <div>
        <Loader2 /> <span>Loading your boards...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2> Error loading boards</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />

      <main className="container flex mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="font-bold text-2xl sm:text-3xl mb-2 text-gray-900">
            Welcome back, {user?.firstName}! 👋🏻
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your boards today.
          </p>
          <Button className="w-auto sm:w-full" onClick={handleCreateBoard}>
            <Plus className="h-4 w-4 mr-2" />
            Create Board
          </Button>
        </div>

        {/* {stats} */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">
                    Total Boards
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {boards.length}
                  </p>
                </div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Trello className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
