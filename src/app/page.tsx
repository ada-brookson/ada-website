'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-semibold text-[#7A8F68]">
              Ada Brookson
            </a>
            <div className="flex gap-8">
              <a href="#home" className="text-[#4A5568] hover:text-[#9CAF88] transition-colors">Home</a>
              <a href="#about" className="text-[#4A5568] hover:text-[#9CAF88] transition-colors">About</a>
              <a href="#services" className="text-[#4A5568] hover:text-[#9CAF88] transition-colors">Services</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar Placeholder */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#9CAF88] to-[#B8C5A8] flex items-center justify-center shadow-lg">
              <span className="text-6xl">🌿</span>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-4">
                Hi, I'm Ada
              </h1>
              <p className="text-xl text-[#4A5568] mb-6 leading-relaxed">
                Family assistant and household manager bringing warmth, organization, 
                and calm to busy households in the Seattle area.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-[#9CAF88]/20 text-[#7A8F68] rounded-full text-sm font-medium">
                  Organized
                </span>
                <span className="px-4 py-2 bg-[#9CAF88]/20 text-[#7A8F68] rounded-full text-sm font-medium">
                  Reliable
                </span>
                <span className="px-4 py-2 bg-[#9CAF88]/20 text-[#7A8F68] rounded-full text-sm font-medium">
                  Calm Under Pressure
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D3748] mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#7A8F68] mb-4">Background</h3>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                I'm a Pacific Northwest native, born and raised in Olympia, Washington. 
                After graduating from the University of Washington in 2019 with a degree 
                in Psychology, I discovered my passion for supporting families through 
                organization and care.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                My journey took me from nannying to family assistant work, and eventually 
                to full household management. Along the way, I spent a transformative 
                semester in Copenhagen, which deepened my appreciation for work-life 
                balance and intentional living.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                Today, I bring a unique blend of warmth, professionalism, and genuine care 
                to everything I do. I believe that a well-organized home is the foundation 
                for a thriving family.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#7A8F68] mb-4">What I Value</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#9CAF88] mt-1">●</span>
                  <span className="text-[#4A5568]"><strong>Reliability</strong> — When I say I'll handle something, it gets handled.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9CAF88] mt-1">●</span>
                  <span className="text-[#4A5568]"><strong>Family</strong> — Both the concept and the reality. Families deserve support.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9CAF88] mt-1">●</span>
                  <span className="text-[#4A5568]"><strong>Continuous Improvement</strong> — I'm always learning and refining my approach.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9CAF88] mt-1">●</span>
                  <span className="text-[#4A5568]"><strong>Work-Life Boundaries</strong> — Healthy boundaries make for better support.</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-[#7A8F68] mb-4 mt-8">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#F0EBE3] text-[#4A5568] rounded text-sm">Household Management</span>
                <span className="px-3 py-1 bg-[#F0EBE3] text-[#4A5568] rounded text-sm">First Aid & CPR</span>
                <span className="px-3 py-1 bg-[#F0EBE3] text-[#4A5568] rounded text-sm">Wild Mushroom ID</span>
              </div>
            </div>
          </div>

          {/* Personal Touches */}
          <div className="mt-12 p-6 bg-[#FAF8F5] rounded-xl">
            <h3 className="text-xl font-semibold text-[#7A8F68] mb-4">When I'm Not Working</h3>
            <p className="text-[#4A5568] leading-relaxed">
              You'll find me on the trails around Seattle, training for my next half marathon, 
              or in the kitchen perfecting my brown butter chocolate chip cookies (my specialty!). 
              I'm an avid hiker who appreciates the beauty of the Pacific Northwest, and yes — 
              I'm not ashamed to admit I watch The Bachelor with my best friend. Life's about balance!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D3748] mb-4 text-center">What I Do</h2>
          <p className="text-[#4A5568] text-center mb-12 max-w-2xl mx-auto">
            As a family assistant and household manager, I handle the logistics so you can 
            focus on what matters most — your family.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-[#2D3748] mb-2">{service.title}</h3>
                <p className="text-[#4A5568] text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Approach */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-[#7A8F68] mb-6">My Approach</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#9CAF88]/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-[#2D3748] mb-2">Proactive</h4>
                <p className="text-[#4A5568] text-sm">I anticipate needs before they become problems.</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#9CAF88]/20 flex items-center justify-center">
                  <span className="text-2xl">🌊</span>
                </div>
                <h4 className="font-semibold text-[#2D3748] mb-2">Calm</h4>
                <p className="text-[#4A5568] text-sm">When things get hectic, I get steadier.</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#9CAF88]/20 flex items-center justify-center">
                  <span className="text-2xl">💚</span>
                </div>
                <h4 className="font-semibold text-[#2D3748] mb-2">Genuine</h4>
                <p className="text-[#4A5568] text-sm">No fake cheerfulness — just real, caring support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#7A8F68] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#B8C5A8]">
            © {new Date().getFullYear()} Ada Brookson · Seattle, WA
          </p>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: "📅",
    title: "Calendar & Schedule Management",
    description: "Coordinating family calendars, appointments, activities, and ensuring everyone is where they need to be."
  },
  {
    icon: "🏠",
    title: "Household Logistics",
    description: "Managing the day-to-day operations of a busy home, from maintenance schedules to supply inventory."
  },
  {
    icon: "👶",
    title: "Childcare Coordination",
    description: "Organizing activities, school communications, playdates, and supporting children's daily routines."
  },
  {
    icon: "✈️",
    title: "Travel Planning",
    description: "Researching, booking, and organizing family travel — from weekend getaways to extended vacations."
  },
  {
    icon: "🍽️",
    title: "Meal Planning & Groceries",
    description: "Weekly meal planning, grocery lists, and coordinating with any household cooking staff."
  },
  {
    icon: "📋",
    title: "Vendor Management",
    description: "Liaising with housekeepers, landscapers, contractors, and other service providers."
  },
  {
    icon: "🎉",
    title: "Event Planning",
    description: "Organizing birthday parties, family gatherings, and special celebrations."
  },
];
