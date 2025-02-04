import React from "react";
import { FeatureCard } from "./FeatureCard";
import Rocket from "../assets/img/SVG/rocket.svg";
import Bell from "../assets/img/SVG/bell-o.svg";
import Globe from "../assets/img/SVG/globe.svg";
import Target from "../assets/img/SVG/target.svg";
import Graph from "../assets/img/SVG/stats.svg";
import Lock from "../assets/img/SVG/lock-closed.svg";

export const SixFeatures = () => {
  const features = [
    {
      title: "Instant Account Setup",
      description:
        "Sign up and get started in just minutes. No paperwork required.",
      icon: "Rocket",
    },
    {
      title: "Real-Time Transaction Alerts",
      description:
        "Stay informed with instant notifications for every transaction.",
      icon: "Bell",
    },
    {
      title: "Free International Transfers",
      description: "Send money across borders with zero fees.",
      icon: "Globe",
    },
    {
      title: "Customizable Savings Goals",
      description:
        "Set personalized goals and track your progress effortlessly.",
      icon: "Target",
    },
    {
      title: "AI-Powered Budgeting Tools",
      description:
        "Automated insights into your spending patterns to help you save more.",
      icon: "Graph",
    },
    {
      title: "Advanced Fraud Protection",
      description:
        "Round-the-clock monitoring to safeguard your account against fraud.",
      icon: "Lock",
    },
  ];
  return (
    <section className="section section-6">
      <h2 className="section-heading">Banking, Reimagined</h2>
      <p className="section-desc">
        Built for the modern era, Skyline Bank gives you powerful tools to
        control your finances. Discover innovative features that offer
        unparalleled convenience, security, and efficiency.{" "}
      </p>
      <div className="grid_features">
        {features.map((feature, index) => {
          return <FeatureCard key={index} {...feature} />;
        })}
      </div>
    </section>
  );
};
