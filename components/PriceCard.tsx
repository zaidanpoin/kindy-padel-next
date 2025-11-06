"use client";

import { motion } from "framer-motion";

interface Feature {
  text: string;
  bullet: boolean;
}

interface PriceCardProps {
  title: string;
  price: string;
  link?: string;
  features: Feature[];
}

export default function PriceCard({
  title,
  price,
  link,
  features,
}: PriceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-2 flex flex-col justify-between min-w-[250px]"
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-6 text-center flex-1 flex flex-col">
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>

        <div className="mb-4 min-h-[120px] flex flex-col justify-center">
          <p className="text-blue-600 font-bold text-2xl">
            Mulai Dari
            <br />
            {price}
          </p>
        </div>

        <ul className="text-gray-600 text-left space-y-2 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.bullet && (
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              )}
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      {title === "Coaching Class" && (
        <span className="ml-4 mb-2 text-left text-gray-500 text-[10px]">
          *Harga sudah termasuk Coach, Court & Ball
        </span>
      )}

      <a
        href={link ? link : "https://wa.me/6281320971811"}
        className="bg-blue-600 text-white py-2 px-4 rounded-b-2xl hover:bg-blue-700 transition block"
      >
        {title === "Rent Gear" ? "Hubungi Sekarang" : "Booking Sekarang"}
      </a>
    </motion.div>
  );
}
