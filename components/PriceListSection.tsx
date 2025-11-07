import PriceCard from "./PriceCard";

const priceData = [
  {
    title: "Court",
    price: "Rp 87.000/jam",
    link: "/booking/court",
    features: [
      { text: "Senin - Minggu", bullet: true },
      { text: "06:00 AM - 10:00 AM | 225k", bullet: false },
      { text: "10:00 AM - 03:00 PM | 87k", bullet: false },
      { text: "03:00 PM - 11:00 AM | 225k", bullet: false },
      { text: "Sabtu - Minggu/ Holliday", bullet: true },
      { text: "All Day | 285k", bullet: false },
    ],
  },
  {
    title: "Coaching Class",
    link: "/jadwal-booking/coaching",
    price: "Rp 600.000/jam",
    features: [
      { text: "1-2 Orang 600k", bullet: true },
      { text: "3-4 Orang 700k", bullet: true },
      { text: "5-6 Orang 1.000k", bullet: true },
    ],
  },
  {
    title: "Mabar All Level",
    link: "/jadwal-booking/mabar",
    price: "Rp 75.000 / Player / Session",
    features: [
      { text: "free cold drinks", bullet: true },
      { text: "Sewa Racket Tersedia", bullet: true },
      { text: "Balls Included", bullet: true },
    ],
  },
  {
    title: "Sewa Racket",
    price: "Rp 85.000 / Sesi",
    link: "wa.me/6281320971811?text=Saya%20ingin%20menyewa%20racket%20padel",
    features: [
      { text: "Padle Racket", bullet: true },
      { text: "Sepatu Padel", bullet: true },
      { text: "Bola Padel", bullet: true },
    ],
  },
];

export default function PriceListSection() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">
          Price List <span className="text-blue-600">Kindy Padel</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-stretch">
          {priceData.map((item, i) => (
            <PriceCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
