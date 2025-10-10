'use client';

import { useEffect } from 'react';

export default function EngrSuccess() {
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
          4-Bit Stochastic Multiplier ASIC
        </h1>

        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 hover:text-gray-300 text-lg leading-relaxed transition-colors">
              Designed an ASIC that performs 4-bit stochastic multiplication using Wokwi and Verilog. 
              The project involved creating a detailed schematic, simulating the design, and getting it fabricated by TinyTapeout.
              The design works by first converting 2 4-bit binary inputs into stochastic bit streams using a pseudo-random bitstream (PRBS) and then using an AND gate to perform the multiplication.
              The ASIC was tested and demonstrated accurate multiplication of stochastic bit streams when using 2-bit inputs, showcasing the potential of stochastic computing in low-power applications.
              For 4-bit inputs, however, the design ran into issues with the conversion logic and was not able to produce accurate results.
            </p>

            <h2 className="text-2xl font-light mt-12 mb-6 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">Key Achievements</h2>
            <ul className="text-gray-400 hover:text-gray-300 list-disc list-inside space-y-4 transition-colors">
              <li>Used Wokwi to design and simulate a 4-bit stochastic multiplier circuit</li>
              <li>D</li>
              <li>Developed power management systems for extended operation time</li>
              <li>Created a user-friendly interface for robot control and monitoring</li>
            </ul>

            <h2 className="text-2xl font-light mt-12 mb-6 hover-underline inline-block bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Raspberry Pi</span>
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Python</span>
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Hardware Design</span>
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Sensor Integration</span>
              <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Power Systems</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}