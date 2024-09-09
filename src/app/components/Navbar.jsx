import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
