import React, { useState } from 'react';
import { WalletButton } from '../Web3/WalletButton';
import { DarkModeToggle } from '../UI/DarkModeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Exchange', href: '#exchange' },
    { label: 'NFT Badges', href: '#badges' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              SkillSwap
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              >
                {item.label}
              </a>
            ))}
            <DarkModeToggle />
            <WalletButton />
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="py-2 flex flex-col space-y-2">
              <DarkModeToggle />
              <WalletButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}