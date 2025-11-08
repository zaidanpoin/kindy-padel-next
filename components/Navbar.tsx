"use client";

import { IoTennisballOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl flex font-bold text-blue-700">
            Kindy Padel{" "}
            <span className="hidden sm:inline">
              <IoTennisballOutline />
            </span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            Tentang
          </a>
          <a href="#gallery" className="hover:text-blue-600 transition">
            Gallery
          </a>
          <a href="/booking/court" className="hover:text-blue-600 transition">
            Jadwal
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Kontak
          </a>
        </nav>
        <a
          href="/booking/court"
          className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium whitespace-nowrap"
        >
          Reservasi Sekarang
        </a>
      </div>
    </header>
  );
}
