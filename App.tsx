import React, { useState } from 'react';
import { Menu, X, Star, Quote } from 'lucide-react';
import { BENEFITS, STEPS, REASONS, TESTIMONIALS, FOOTER_LINKS } from './constants';
import { Button } from './components/Button';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Strictly defined offer URL as requested
  const OFFER_URL = "https://glctrk.org/aff_c?offer_id=2701&aff_id=29930";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-amazon-light">
      {/* Navigation - Simple Sticky */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-md mx-auto px-6 py-4 flex justify-between items-center md:max-w-2xl lg:max-w-4xl">
          <div className="flex items-center gap-1">
            <span className="font-bold text-xl tracking-tight">Amz<span className="text-amazon">Review</span></span>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 text-gray-700 hover:text-amazon">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-4 px-6 md:hidden animate-in slide-in-from-top-2 duration-200">
             <ul className="space-y-4">
               <li><a href="#benefits" onClick={() => setIsMenuOpen(false)} className="block font-medium text-gray-600 hover:text-amazon">Benefits</a></li>
               <li><a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block font-medium text-gray-600 hover:text-amazon">How It Works</a></li>
               <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block font-medium text-gray-600 hover:text-amazon">Testimonials</a></li>
               <li><a href={OFFER_URL} target="_blank" rel="noopener noreferrer" className="block font-bold text-amazon hover:text-amazon-dark">Apply Now</a></li>
             </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-12 pb-16 px-6 text-center">
        <div className="max-w-md mx-auto md:max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight mb-4 tracking-tight text-amazon-dark">
            Become an <br />
            <span className="text-amazon">Amazon Product</span> <br />
            Reviewer
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Get paid to test the latest gadgets, fashion, and home goods. Help shape the future of online shopping with your feedback.
          </p>
          <Button variant="primary" href={OFFER_URL} target="_blank">Apply Now</Button>
        </div>
      </section>

      {/* Program Benefits */}
      <section id="benefits" className="bg-gray-50 py-12 px-6">
        <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-2 text-amazon-dark">Program Benefits</h2>
          <p className="text-center text-gray-500 mb-8">Join our exclusive reviewer program and enjoy these amazing perks</p>
          
          <div className="space-y-4">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-amazon bg-orange-50 p-3 rounded-xl">
                  <benefit.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amazon-dark">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-16 px-6">
        <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-amazon-dark">How It Works</h2>
          
          <div className="space-y-12 relative">
            {/* Connecting Line (Visual only) */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-100 hidden sm:block"></div>

            {STEPS.map((step, index) => (
              <div key={index} className="flex gap-6 relative">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amazon text-white flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-white z-10 relative">
                    {step.number}
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="text-2xl font-bold mb-3 text-amazon-dark">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-10 text-amazon-dark">Why Join Our Program?</h2>
          
          <div className="grid gap-4">
            {REASONS.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-2 text-amazon-dark">{reason.title}</h3>
                <p className="text-gray-500">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-16 px-6">
        <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-10 text-amazon-dark">What Our Reviewers Say</h2>
          
          <div className="space-y-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
                <Quote className="text-amazon/20 absolute top-6 left-6" size={40} />
                <p className="text-gray-600 mb-6 relative z-10 text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.color} text-white flex items-center justify-center font-bold text-lg`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-bold text-amazon-dark">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-amazon py-20 px-6 text-center text-amazon-dark">
        <div className="max-w-md mx-auto md:max-w-2xl">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
             <Star className="text-white" size={32} fill="currentColor" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Join?</h2>
          <p className="text-white/90 text-lg mb-8 font-medium">
            Apply today and start receiving free Amazon items while earning money for your honest reviews.
          </p>
          <Button variant="white" fullWidth className="max-w-xs mx-auto shadow-xl text-amazon-dark font-bold" href={OFFER_URL} target="_blank">Apply Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-2">AmzReview</h3>
            <p className="text-gray-400">Join our community of enthusiasts and help shape the future of online shopping.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-6 text-lg">Links</h4>
              <ul className="space-y-4">
                <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
                <li><a href={OFFER_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Apply Now</a></li>
              </ul>
            </div>
            
            {FOOTER_LINKS.map((group, index) => (
              <div key={index}>
                <h4 className="font-bold mb-6 text-lg">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link, i) => (
                    <li key={i}><a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Amazon Product Reviewer Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;