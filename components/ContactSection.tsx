import { MapPin, Phone, CalendarDays, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-blue-700 text-white py-20 px-6 text-center"
    >
      <h3 className="text-3xl font-bold mb-8">Hubungi Kami</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
        <p className="flex items-center gap-3">
          <MapPin className="w-5 h-5" /> Jl. Kartini depok No. 14
        </p>
        <p className="flex items-center gap-3">
          <Phone className="w-5 h-5" /> +62 813-2097-1811
        </p>
        <a
          href="https://instagram.com/kindypadel"
          className="flex items-center gap-3"
        >
          <Instagram className="w-5 h-5" /> @KindyPadel
        </a>
        <p className="flex items-center gap-3">
          <CalendarDays className="w-5 h-5" /> Buka Setiap Hari: 24 Jam
        </p>
      </div>
    </section>
  );
}
