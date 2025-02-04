import React from "react";

export const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature_card">
      <div className={`feature-icon ${icon}`}></div>
      <h4 className="feature-title">{title}</h4>
      <span>{description}</span>
    </div>
  );
};
