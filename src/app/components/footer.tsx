import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiGlobe } from 'react-icons/fi';


export default function Footer() {
  return (
    <footer className="relative bg-black text-white font-mono overflow-hidden">
      {/* Subtle animated gradient shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10" />

      {/* Neon top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />

      <div className="relative z-10 w-full px-6 py-10 flex flex-col gap-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h2 className="text-xl font-bold text-cyan-300">Gradient Club</h2>
            <p className="text-gray-400">Ideas are automated</p>
          </div>
          <a
            href="https://spechyd.ac.in/" // update with actual college link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            St. Peters Enginnering College
          </a>
        </div>

        {/* Middle Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.instagram.com/gradient_spec?igsh=MW13NGFxeTBvZnJoNg==" // update link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-all hover:scale-110"
            >
              <FaInstagram className="drop-shadow-[0_0_6px_#ec4899]" />
            </a>
            <a
              href="https://www.linkedin.com/company/spec-gradient-club/" // update link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all hover:scale-110"
            >
              <FaLinkedin className="drop-shadow-[0_0_6px_#3b82f6]" />
            </a>
            <a
              href="https://unstop.com/hackathons/specathon-2025-st-peters-engineering-college-1533248"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-all hover:scale-110"
              title="Unstop - Specathon 2025"
            >
              <FiGlobe className="drop-shadow-[0_0_6px_#22c55e]" />
            </a>

          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <a
              href="tel:+919876543210" // update phone
              className="flex items-center gap-2 hover:text-cyan-400"
            >
              <MdPhone /> +91 8328026979
            </a>
            <a
              href="mailto:gradeint@stpetershyd.com" // update email
              className="flex items-center gap-2 hover:text-cyan-400"
            >
              <HiOutlineMail /> gradient@stpetershyd.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-900/50"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Gradient Club | All Rights Reserved</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-3 py-1 border border-cyan-400 rounded hover:bg-cyan-500/10 hover:shadow-[0_0_10px_#06b6d4] transition-all"
          >
            Back to Top
          </button>
        </div>
      </div>

      {/* Tailwind animation keyframes */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 15s ease infinite;
        }
      `}</style>
    </footer>
  );
}
