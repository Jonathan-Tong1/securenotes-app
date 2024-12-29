import React from "react";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-x-4 gap-y-10 md:px-0 px-5">
      <TestimonialItem
      title="Unmatched Security!"
        text="I've used many apps for taking notes, but none come close to how secure this one feels. It's like having a digital vault for my thoughts. 10/10!"
        name="Alex P."
        status="Privacy Advocate"
      />
      <TestimonialItem
        title="Peace of Mind Guaranteed"
        text="Knowing my notes are encrypted gives me so much peace of mind. It's the perfect app for anyone who values their privacy and security."
        name="Jordan M."
        status="Tech Enthusiast"
      />
      <TestimonialItem
        title="Top-Notch Encryption"
        text="This secure notes app is a game-changer. I don't have to worry about prying eyes anymore. It's fast, reliable, and super safe!"
        name="Taylor R."
        status="Data Security Expert"
      />
   

    </div>
  );
};

export default Testimonial;
