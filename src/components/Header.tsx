import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About me", href: "#summary" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-gray-900 via-black to-gray-950 shadow-xl"
          : "bg-gradient-to-r from-gray-950 via-black to-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-gray-300 relative">
            <a
              href="https://github.com/SnApE-74"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 hover:text-white hover:drop-shadow-[0_0_8px_white]"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/shanmukha-qa/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 hover:text-blue-500 hover:drop-shadow-[0_0_8px_#3b82f6]"
            >
              <Linkedin size={22} />
            </a>

            {/* Mail Icon with hover email */}
            <div className="relative group">
              <Mail
                size={22}
                className="transition-transform transform hover:scale-125 hover:text-red-500 hover:drop-shadow-[0_0_8px_#ef4444] cursor-pointer"
              />
              {/* Email text, hidden by default */}
              <p className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 rounded-md bg-gray-800 text-teal-300 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                shanmukhauppala7@gmail.com
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  const element = document.querySelector(item.href);
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-gray-200 hover:text-gray-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu */}
          <button
            className="md:hidden p-2 text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-gray-950 via-black to-gray-900 border-t border-gray-800">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-200 hover:text-gray-400 hover:bg-gray-800/40 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
