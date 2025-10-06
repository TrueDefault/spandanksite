'use client';

import { useEffect } from 'react';

export default function NewsNetwork() {
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

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
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
        <h1 className="text-4xl md:text-6xl font-light mb-12 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent transition-colors duration-50">
          News Network
        </h1>

        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 hover:text-gray-300 text-lg leading-relaxed transition-colors">
              Developed a comprehensive news aggregation Android application featuring modern UI/UX design principles and robust functionality.
            </p>

            <h2 className="text-2xl font-light mt-12 mb-6 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">Key Features</h2>
            <ul className="text-gray-400 hover:text-gray-300 list-disc list-inside space-y-4 transition-colors">
              <li>Real-time news updates using News API integration</li>
              <li>Customizable news categories and preferences</li>
              <li>Offline reading capability with local storage</li>
              <li>Responsive and intuitive user interface</li>
            </ul>

            <h2 className="text-2xl font-light mt-12 mb-6 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Java</span>
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Android Studio</span>
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Figma</span>
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">News API</span>
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">SQLite</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}