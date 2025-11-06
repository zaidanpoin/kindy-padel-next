export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">
          Tentang <span className="text-blue-600">Kindy Padel</span>
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          Didirikan pada tahun 2025, <b>Kindy Padel</b> menjadi pelopor lapangan
          padel pertama di Kota Depok Dan Termurah Se Indonesia. Kami
          berkomitmen untuk menghadirkan pengalaman olahraga padel yang seru dan
          profesional — lengkap dengan fasilitas modern, lingkungan nyaman,
          serta komunitas aktif yang ramah untuk semua kalangan.
        </p>

        <div className="embed-map-responsive mt-4">
          <div className="embed-map-container">
            <iframe
              className="embed-map-frame"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=kindy%20padel&t=p&z=19&ie=UTF8&iwloc=B&output=embed"
            />
          </div>
          <style>{`.embed-map-responsive{position:relative;text-align:right;width:100%;height:0;padding-bottom:66.66666666666666%;}.embed-map-container{overflow:hidden;background:none!important;width:100%;height:100%;position:absolute;top:0;left:0;}.embed-map-frame{width:100%!important;height:100%!important;position:absolute;top:0;left:0;}`}</style>
        </div>
      </div>
    </section>
  );
}
