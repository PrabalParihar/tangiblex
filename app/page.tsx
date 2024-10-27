"use client"
// import { useState } from 'react';
import {  Twitter, Linkedin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-slate-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-black text-2xl font-bold">TangibleX</span>
          </div>
          
          <div className="flex space-x-8">
            <a href="#about" className="text-gray-900 hover:text-blue-500">About Us</a>
            <a href="#marketplace" className="text-gray-900 hover:text-blue-500">Marketplace</a>
            <a href="#whitepaper" className="text-gray-900 hover:text-blue-500">White Paper</a>
            <a href="#contact" className="text-gray-900 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className=" min-h-[80vh] bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold mb-6 max-w-4xl leading-tight text-black ">
          Revolutionizing Real Estate Investment
        </h1>
        <p className="text-xl text-gray-900 mb-12">
          Tokenized commercial real estate for the modern investor
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors flex items-center group">
          Explore Properties
          <svg 
            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Properties Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-black font-bold text-center mb-16">
            Top Listed Properties
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Modern Apartment Complex"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-black font-semibold mb-2">Luxury Office Space 1</h3>
                <p className="text-gray-900 mb-4">Prime location, high yield potential</p>
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  View Details
                </button>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Luxury Cabin"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Luxury Office Space 2</h3>
                <p className="text-gray-900 mb-4">Prime location, high yield potential</p>
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  View Details
                </button>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Modern House"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Luxury Office Space 3</h3>
                <p className="text-gray-900 mb-4">Prime location, high yield potential</p>
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-black font-bold text-center mb-16">
            Why Tokenized Commercial Real Estate?
          </h2>
          <div className="grid grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl text-black  font-semibold mb-4">Accessibility</h3>
              <p className="text-gray-900">
                Invest in high-value properties with lower capital requirements through fractional ownership.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl text-black  font-semibold mb-4">Liquidity</h3>
              <p className="text-gray-900">
                Trade your real estate tokens easily on our marketplace, providing unprecedented liquidity.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl text-black  font-semibold mb-4">Transparency</h3>
              <p className="text-gray-900">
                Blockchain technology ensures all transactions and ownership records are transparent and immutable.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl text-black  font-semibold mb-4">Diversification</h3>
              <p className="text-gray-900">
                Spread your investment across multiple properties and markets with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who have already discovered the future of real estate investment.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TangibleX</h3>
              <p className="text-gray-400">
                Revolutionizing real estate investment through tokenization.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Properties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 TangibleX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}