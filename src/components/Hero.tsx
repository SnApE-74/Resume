import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Github, Linkedin, FileText } from "lucide-react";

const Hero = forwardRef((props, ref) => {
  const emailRef = useRef<HTMLParagraphElement>(null);

  // Expose "highlightEmail" to parent (Header)
  useImperativeHandle(ref, () => ({
    highlightEmail: () => {
      if (emailRef.current) {
        emailRef.current.classList.add("animate-beep");
        setTimeout(() => {
          emailRef.current?.classList.remove("animate-beep");
        }, 2000); // 2 sec
      }
    },
  }));

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen flex items-center text-white"
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Profile Circle */}
        <div className="mb-10">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGnHDB0R7pkrQ/profile-displayphoto-scale_200_200/B4EZgv8WOGHoAc-/0/1753151006049?e=2147483647&v=beta&t=-7DGX3d3JyWSKKmDxAPO5s_JKrlpVlhrjwFEtYP6Bl4"
              alt="Shanmukha Maneeshbabu Uppala"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Shanmukha Maneeshbabu Uppala
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-medium text-indigo-200 mb-10">
          QA Automation Engineer
        </h2>

        {/* Bio */}
        <p className="max-w-2xl mx-auto text-lg text-slate-200 leading-relaxed mb-12">
          Automation Engineer with 5+ years of expertise in Selenium, Jenkins,
          Cypress, and CI/CD pipelines. Passionate about building scalable test
          frameworks and ensuring high-quality software delivery.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-5 mb-6">
          <a
            href="https://www.linkedin.com/in/shanmukha-qa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:scale-105"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/SnApE-74"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-300 shadow-lg hover:scale-105"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1KFJPmi_kj0NxZdTvX-lUyXyuB7ODcRIK"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:scale-105"
          >
            <FileText size={20} /> Resume
          </a>
        </div>

        {/* Email */}
        <p
          ref={emailRef}
          className="text-lg md:text-xl font-semibold text-teal-300 mb-14"
        >
          📩 shanmukhauppala7@gmail.com
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-4xl font-bold text-blue-300 mb-2">5+</h3>
            <p className="text-slate-200">Years of Experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-4xl font-bold text-teal-300 mb-2">20+</h3>
            <p className="text-slate-200">Projects Delivered</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-4xl font-bold text-indigo-300 mb-2">100%</h3>
            <p className="text-slate-200">Client Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
