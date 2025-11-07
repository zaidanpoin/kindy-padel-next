import { motion } from "framer-motion";
import Image from "next/image";
// import padel1 from "/images/landing-page/lapangan/padel1.webp";
export default function HeroSection() {
  const images = [
    {
      url: "/images/landing-page/lapangan/padel1.webp",
      description: "Kindy Padel",
    },
  ];
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-36 gap-10">
      <motion.div
        className="max-w-lg order-2 md:order-1"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Lapangan <span className="text-blue-600">Padel Pertama</span> di Depok
          Dan Termurah Di Indonesia
        </h2>
        {/* <p className="text-lg text-gray-700 mb-6">
            Rasakan sensasi olahraga padel di fasilitas modern dengan
            pencahayaan premium dan suasana eksklusif. Kami hadir untuk
            memperkenalkan gaya hidup sehat yang menyenangkan.
          </p> */}
        <a
          href="/jadwal-booking/court"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
        >
          Reservasi Sekarang
        </a>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 rounded-3xl shadow-lg order-1 md:order-2 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={images[0].url}
          alt="Lapangan padel modern di Depok"
          className="w-full h-auto rounded-3xl"
          width={1000}
          height={400}
        />
      </motion.div>
    </section>
  );
}
