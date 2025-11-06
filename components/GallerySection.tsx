"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  {
    url: "/images/landing-page/lapangan/padel1.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel1.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel3.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel4.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel5.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel6.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel7.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel8.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel9.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel10.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel11.webp",
    description: "Kindy Padel",
  },
  {
    url: "/images/landing-page/lapangan/padel12.webp",
    description: "Kindy Padel",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-gray-50 py-16" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Galeri <span className="text-blue-600">Kindy Padel</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Nikmati pengalaman bermain padel pertama di Depok dengan fasilitas
          modern dan suasana eksklusif.
        </p>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-2xl shadow-lg"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-2xl h-[300px] sm:h-[400px]">
                <Image
                  src={item.url}
                  alt={`Lapangan ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-white font-semibold text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .swiper-button-prev,
          .swiper-button-next {
            width: 26px;
            height: 26px;
            border-radius: 9999px;
            background: #ffffff !important;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(2,6,23,0.12);
            z-index: 50;
            transition: transform .15s ease, box-shadow .15s ease;
          }
          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(2,6,23,0.14);
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 20px;
            color: #1e40af;
          }
          .swiper-button-prev { left: 8px; }
          .swiper-button-next { right: 8px; }
          @media (max-width: 640px) {
            .swiper-button-prev,
            .swiper-button-next {
              width: 26px;
              height: 26px;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 18px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
