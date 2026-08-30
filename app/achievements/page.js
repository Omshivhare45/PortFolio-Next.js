import React from "react";

const achievements = [
  {
    title: "Secured 2nd Place in First Byte Coding Competition",
    description:
      "Participated in a First Byte coding competition organized by the CSE department. Secured 2nd place among 100+ participants.",
    date: "Oct 2025",
  },
  {
    title: "Achievement Title",
    description: "Write your achievement description here.",
    date: "2026",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1218] via-[#4A2635] to-[#8B3A50] px-6 py-10 text-white md:px-10 lg:px-20">
      
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        Achievements
      </h2>

      <div className="mx-auto mt-12 max-w-4xl">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group cursor-pointer border-b border-white/10 py-8 transition-all duration-300 hover:px-4 hover:bg-white/[0.03]"
          >
            <div className="grid gap-4 md:grid-cols-[120px_1fr]">
              
              <span className="text-sm text-white/40">
                {achievement.date}
              </span>

              <div>
                <h3 className="text-xl font-medium transition-colors duration-300 group-hover:text-pink-300">
                  {achievement.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-white/60">
                  {achievement.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Page;