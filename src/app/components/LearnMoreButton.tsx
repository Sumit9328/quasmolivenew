import { useState } from 'react';

export default function LearnMoreButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Reset after animation
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center gap-3 px-[3px] py-[3px] rounded-[6px] bg-blue-600 overflow-hidden group hover:shadow-lg transition-shadow"
    >
      {/* White rounded portion with Learn More text - slides right on click */}
      <span
        className={`relative z-10 px-6 py-2 bg-white text-blue-600 rounded-[6px] font-medium transition-transform duration-500 ${isClicked ? 'translate-x-8' : 'translate-x-0'
          }`}
      >
        Learn More
      </span>

      {/* Arrow icon - always visible on right */}
   <svg
  className="relative z-10 w-5 h-5 text-white rotate-320"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
}