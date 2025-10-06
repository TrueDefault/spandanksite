'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.style.setProperty('--foreground-rgb', newTheme === 'dark' ? '255, 255, 255' : '0, 0, 0');
    document.documentElement.style.setProperty('--background-start-rgb', newTheme === 'dark' ? '0, 0, 0' : '255, 255, 255');
    document.documentElement.style.setProperty('--background-end-rgb', newTheme === 'dark' ? '0, 0, 0' : '240, 240, 240');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Reduced offset for better section alignment

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-50 border-b border-gray-800/20">
      <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-light hover:text-blue-400 transition-colors">SK</Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/#about" className={`${activeSection === 'about' ? 'text-blue-400' : theme === 'dark' ? 'text-gray-400' : 'text-black/70'} hover:text-blue-400 transition-colors hover-underline`}>About</Link>
          <Link href="/#experience" className={`${activeSection === 'experience' ? 'text-blue-400' : theme === 'dark' ? 'text-gray-400' : 'text-black/70'} hover:text-blue-400 transition-colors hover-underline`}>Experience</Link>
          <Link href="/#projects" className={`${activeSection === 'projects' ? 'text-blue-400' : theme === 'dark' ? 'text-gray-400' : 'text-black/70'} hover:text-blue-400 transition-colors hover-underline`}>Projects</Link>
          <Link href="/#contact" className={`${activeSection === 'contact' ? 'text-blue-400' : theme === 'dark' ? 'text-gray-400' : 'text-black/70'} hover:text-blue-400 transition-colors hover-underline`}>Contact</Link>
        </nav>

        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full backdrop-blur-md ${theme === 'dark' ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-gray-200/50 hover:bg-gray-300/50'} transition-colors`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '🌙' : '🌞'}
        </button>
      </div>
    </header>
  );
}