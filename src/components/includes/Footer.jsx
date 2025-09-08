import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">©</span>
            </div>
            <span className="text-sm">
              2025 IEEE NSUT Conference, All rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;