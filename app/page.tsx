"use client";

import { SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckSquare,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Trello,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const { isSignedIn, user } = useUser();

  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Organize your tasks with intuitive drag-and-drop boards",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team in real-time",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with Next.js 15 for optimal performance",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with Clerk authentication",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-purple-50">
      <Navbar />

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Organize work and life,{" "}
            <span className="text-emerald-600">finally.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            TrelloClone helps teams move work forward. Collaborate, manage
            projects, and reach new productivity peaks. From high rises to the
            home office, the way your team works is unique—accomplish it all
            with TrelloClone.
          </p>

          {!isSignedIn && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton>
                <Button
                  size="lg"
                  className="text-lg px-8 cursor-pointer border border-black hover:bg-white hover:text-gray-900 hover:-translate-y-1 capitalize transition-all duration-500"
                >
                  Start for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to stay organized
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features to help your team collaborate and get more done.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who are already using TrelloClone to
            organize their work.
          </p>

          {!isSignedIn && (
            <SignUpButton>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start your free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SignUpButton>
          )}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Trello className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">TrelloClone</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400 capitalize">
              <span>
                © 2025 TrelloClone. All rights reserved{" "}
                <a
                  className="font-semibold text-white"
                  href="https://github.com/dariushOps"
                >
                  DariushOps
                </a>
                .
              </span>
              <span>Built with Next.js & Clerk</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
