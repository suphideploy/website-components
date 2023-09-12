import React from "react";

function Welcome({ page }) {
  return (
    <div className="bg-[url('../public/hero.jpg')] h-screen bg-no-repeat bg-cover bg-[#00000099] bg-blend-overlay flex items-center justify-center">
      <h2 className="text-white md:text-[180px] text-[80px]">{page}</h2>
    </div>
  );
}

export default Welcome;

// classname too long now, let's fold them