'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [profession, setProfession] = useState('n Electrical Engineering Student.');
  const [theme] = useState('dark');

  useEffect(() => {
    const professions = ['an Electrical Engineering Student.', 'a Undergraduate Researcher.', 'a Robotics Enthusiast.'];
    let currentIndex = 0;
    let isDeleting = false;
    let text = '';
    let delta = 200;

    function tick() {
      const current = professions[currentIndex];

      if (isDeleting) {
        text = current.substring(0, text.length - 1);
      } else {
        text = current.substring(0, text.length + 1);
      }

      setProfession(text);

      if (!isDeleting && text === current) {
        delta = 2000;
        isDeleting = true;
      } else if (isDeleting && text === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % professions.length;
        delta = 200;
      } else {
        delta = isDeleting ? 100 : 200;
      }

      setTimeout(tick, delta);
    }

    tick();

  }, []);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => {
      cursor.classList.remove('cursor--hidden');
    };

    const handleMouseLeave = () => {
      cursor.classList.add('cursor--hidden');
    };

    const handleLinkHover = () => {
      cursor.classList.add('cursor--link-hover');
    };

    const handleLinkLeave = () => {
      cursor.classList.remove('cursor--link-hover');
    };

    const handleClick = () => {
      cursor.classList.add('cursor--clicked');
      setTimeout(() => {
        cursor.classList.remove('cursor--clicked');
      }, 150);
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('.parallax-section');
      sections.forEach((section) => {
        const offset = window.pageYOffset;
        const speed = parseFloat(section.getAttribute('data-speed') || "0.5");
        section.style.setProperty('--scroll-offset', `${offset * speed}px`);
      });
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('mouseup', () => cursor.classList.remove('cursor--clicked'));
    window.addEventListener('scroll', handleScroll);

    const links = document.querySelectorAll<HTMLElement>('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('mouseup', () => cursor.classList.remove('cursor--clicked'));
      window.removeEventListener('scroll', handleScroll);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
      
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <main className="min-h-screen p-8 pt-24 md:p-16 md:pt-32 lg:p-24 lg:pt-40" style={{ background: `var(--bg-gradient-start)`, color: `var(--text-primary)` }}>
      <div className="max-w-4xl mx-auto">

        {/* Hero Section */}
        <section className={`mb-24 hover:translate-y-[-5px] transition-transform parallax-section ${theme === 'dark' ? 'text-white' : 'text-black'}`} data-speed="0.3">
          <h1 className="text-4xl md:text-6xl font-light mb-6 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">Spandan Kottakota</h1>
          <div className="text-lg md:text-xl text-[var(--text-secondary)] hover:text-[var(--text-hover)] transition-colors">
            <div className="flex items-baseline">
              <span>I&apos;m</span>
              <span className="typing-text" id="typing-text">{profession}</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 hover:translate-y-[-5px] transition-transform parallax-section scroll-mt-24" data-speed="0.5">
          <h2 className="text-2xl font-light mb-6 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">About</h2>
          <p className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-black/70 hover:text-black'} leading-relaxed transition-colors`}>
            I&apos;m an Electrical Engineering student at University of California, San Diego (Class of 2027) with a strong academic record (GPA: 4.0/4.0).
            My expertise spans across various technical domains including C, C++, Python, JavaScript, and hardware design.
            I&apos;m passionate about innovative problem-solving and applying engineering principles to real-world challenges.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 hover:translate-y-[-5px] transition-transform parallax-section scroll-mt-24" data-speed="0.7">
          <h2 className="text-2xl font-light mb-6 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-12">
            <div className="group p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl group-hover:text-blue-400 transition-colors">Undergraduate Researcher - Project Engineering Success</h3>
                <span className="text-gray-500 group-hover:text-gray-400 transition-colors duration-50">Sep 2023 - Present</span>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-black/70 group-hover:text-black'} transition-colors`}>Created a program with Dr. David Parent to introduce chip design to prospective SJSU students. Designed a 4-bit Stochastic Multiplier achieving 225% improvement in efficiency.</p>
            </div>

            <div className="group p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl group-hover:text-blue-400 transition-colors">Designer/Builder - Spartan Racing Formula SAE</h3>
                <span className="text-gray-500 group-hover:text-gray-400 transition-colors duration-50">Sep 2023 - May 2024</span>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-black/70 group-hover:text-black'} transition-colors`}>Designed dashboard components, soldered PCB components, and built housing for the electrical systems.</p>
            </div>

            <div className="group p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl group-hover:text-blue-400 transition-colors">Programming Intern - CallHealth</h3>
                <span className="text-gray-500 group-hover:text-gray-400 transition-colors duration-50">Jun 2022 - Aug 2022</span>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-black/70 group-hover:text-black'} transition-colors`}>Developed an automated medical records processing application achieving 93% time reduction. Implemented OCR using Python, Tesseract, and Google Vision.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 hover:translate-y-[-5px] transition-transform parallax-section scroll-mt-24" data-speed="0.9">
          <h2 className="text-2xl font-light mb-6 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            <Link href="/projects/togobot" className="group p-6 rounded-lg hover:bg-gray-900/50 transition-all duration-50 w-full block">
              <h3 className="text-xl group-hover:text-blue-400 transition-colors mb-2">To-Go Bot</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-black/70 group-hover:text-black'} mb-2 transition-colors`}>Led navigation system design for an autonomous delivery robot, achieving 80.67% better accuracy. Implemented various communication protocols and power delivery systems.</p>
              <div className="flex gap-3 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                <span className="hover:text-blue-400 transition-colors duration-50">Raspberry Pi</span>
                <span>•</span>
                <span className="hover:text-blue-400 transition-colors duration-50">Python</span>
                <span>•</span>
                <span className="hover:text-blue-400 transition-colors duration-50">Hardware Design</span>
              </div>
            </Link>
            
            <Link href="/projects/newsnetwork" className="group p-6 rounded-lg hover:bg-gray-900/50 transition-all duration-50 w-full block">
              <h3 className="text-xl group-hover:text-blue-400 transition-colors mb-2">News Network</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-black/70 group-hover:text-black'} mb-2 transition-colors`}>Developed a news aggregation Android application with modern UI/UX design. Integrated News API for content sourcing and management.</p>
              <div className="flex gap-3 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                <span className="hover:text-blue-400 transition-colors duration-50">Java</span>
                <span>•</span>
                <span className="hover:text-blue-400 transition-colors duration-50">Android Studio</span>
                <span>•</span>
                <span className="hover:text-blue-400 transition-colors duration-50">Figma</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="hover:translate-y-[-5px] transition-transform parallax-section scroll-mt-24" data-speed="1.1">
          <h2 className="text-2xl font-light mb-6 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">Contact</h2>
          <div className="flex gap-6">
            <a href="mailto:spandankottakota@gmail.com" className={`${theme === 'dark' ? 'text-gray-400' : 'text-black/70'} hover:text-blue-400 transition-colors hover-underline`}>Email</a>
            <a href="https://linkedin.com/in/spandankottakota" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-gray-400' : 'text-black/70'} hover:text-blue-400 transition-colors hover-underline`}>LinkedIn</a>
            <a href="https://www.instagram.com/spandankottakota/" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-gray-400' : 'text-black/70'} hover:text-blue-400 transition-colors hover-underline`}>Instagram</a>
          </div>
        </section>
      </div>
    </main>
  );
}
