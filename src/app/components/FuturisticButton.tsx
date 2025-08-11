import React from 'react';

interface FuturisticButtonProps {
  text: string;
  caption?: string;
  onClick?: () => void;
  className?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  text, 
  caption,
  onClick, 
  className = '' 
}) => {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        className={`
          rounded-xl
          bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400
          text-white font-mono uppercase tracking-wide
          py-2 px-5
          shadow-lg
          hover:scale-105 transition-transform duration-300 ease-in-out
          hover:shadow-[0_0_10px_#00fff7]
          text-center
          focus:outline-none
          ${className}
        `}
      >
        {text}
      </button>
      {caption && (
        <p className="text-xs text-cyan-300 mt-2 text-center font-mono">
          {caption}
        </p>
      )}
    </div>
  );
};

export { FuturisticButton };
