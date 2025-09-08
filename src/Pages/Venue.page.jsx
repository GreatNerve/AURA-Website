import React from 'react';
import { MapPin, Calendar, Train, Building, Utensils, TreePine, ExternalLink, Phone } from 'lucide-react';
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";

export default function VenuePage() {
  const myImage = "https://www.nsut.ac.in/sites/default/files/inline-images/1599038395phpImfPh0.jpeg";
  const image1 = "https://upload.wikimedia.org/wikipedia/commons/d/dc/NSIT_Delhi_-_path_from_Academic_and_Administrative_Block_to_Library%2C_telephoto.JPG";

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A192F' }}>

      {/* Header Section */}
      <div className="px-6 py-6">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h1 className="text-white text-3xl font-bold mb-2">Where to Attend?</h1>
        </div>

        {/* Image Container */}
        <div
          className="h-80 rounded-xl overflow-hidden shadow-lg bg-cover bg-center relative"
          style={{ backgroundImage: `url(${myImage})` }}
        >
          {/* Address overlay */}
          <div className="absolute bottom-6 left-6 text-white bg-black bg-opacity-40 px-4 py-2 rounded">
            <MapPin className="w-5 h-5 inline mr-2" />
            <span>
              Netaji Subhas University of Technology, Azad Hind Fauj Marg, Dwarka, New Delhi - 110078
            </span>
          </div>

          {/* Date overlay */}
          <div className="absolute bottom-6 right-6 flex items-center bg-white bg-opacity-40 px-3 py-2 rounded">
            <Calendar className="w-4 h-4 mr-2" />
            <span>28 September, 2025</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 py-8">
        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-white text-sm max-w-md mx-auto leading-relaxed">
            Located in the heart of Dwarka, NSUT is one of India's premier engineering institutions,
            known for its state-of-the-art infrastructure and exceptional academic excellence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Left Side - Campus Image */}
          <div className="bg-slate-700 rounded-2xl overflow-hidden shadow-lg relative">
            <div
              className="h-full w-full bg-cover bg-center rounded-t-2xl"
              style={{ backgroundImage: `url(${image1})` }}
            ></div>

            {/* Overlay website link */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded hover:bg-opacity-100 transition">
              <a
                href="https://nsut.ac.in/en/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium text-sm"
              >
                Visit University's Website
              </a>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6">

            {/* Easily Accessible */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Train className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Easily Accessible - 10 minutes from Dwarka Mor Metro Station
                  </h3>
                </div>
              </div>
            </div>

            {/* Modern Facilities */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Building className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Modern Facilities - Spacious auditoriums, seminar halls, and networking spaces
                  </h3>
                </div>
              </div>
            </div>

            {/* On-Campus Amenities */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Utensils className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    On-Campus Amenities - Food courts for attendees
                  </h3>
                </div>
              </div>
            </div>

            {/* Green Campus */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <TreePine className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Green & Spacious Campus - A comfortable and inspiring environment for learning
                  </h3>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              {/* Get Direction button */}
              <a
                href="https://maps.app.goo.gl/jPBFnM1HJKsVRcvc7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium flex items-center hover:bg-slate-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Get Direction
              </a>

              {/* Contact Venue Lead button */}
              <a
                href="tel:+919999999XXX"
                className="bg-white text-slate-800 border border-slate-300 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Venue Lead
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
