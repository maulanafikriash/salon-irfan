/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import AOS from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StickyWhatsAppIcon from '../components/StickyWhatsAppIcon';
import ServicesSection from '../components/ServicesSection';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <ServicesSection showButtonLink={false} />
      <section className="py-4" id="service-page">
        <div className="container py-md-4 p-4" data-aos="fade-up">
          <h3 className="heading text-center mb-3 mb-sm-5" data-aos="fade-down">
            Riasan Kami
          </h3>
          <div className="row">
            <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0">
              <LazyLoadImage
                src="assets/images/img-service-4.webp"
                className="img-fluid img-rounded"
                alt="gambar layanan"
              />
            </div>
            <div className="col-lg-3 col-md-6 bg-grid-clr">
              <h4 className="mt-md-0 my-2">Tradisional</h4>
              <p className="">
                Makeup tradisional merujuk pada teknik dan gaya riasan yang
                mengakar pada budaya dan sejarah tertentu, seringkali
                dipertahankan dan dilestarikan selama generasi.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-0 mt-4">
              <LazyLoadImage
                src="assets/images/img-service-2.webp"
                className="img-fluid img-rounded"
                alt="gambar layanan"
              />
            </div>
            <div className="col-lg-3 col-md-6 bg-grid-clr mt-lg-0 mt-md-4">
              <h4 className="mt-md-0 my-2">Hari Kemerdekaan</h4>
              <p className="">
                Makeup untuk merayakan Hari Kemerdekaan sering kali mencerminkan
                semangat patriotisme dan kebanggaan nasional.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
              <LazyLoadImage
                src="assets/images/img-service-1.webp"
                className="img-fluid img-rounded"
                alt="gambar layanan"
              />
            </div>
            <div className="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
              <h4 className="mt-md-0 my-2">Karakter Horor</h4>
              <p className="">
                Makeup karakter horor dirancang untuk menciptakan tampilan yang
                menakutkan dan sering digunakan dalam film, teater, pesta
                kostum, atau acara bertema horor.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
              <LazyLoadImage
                src="assets/images/img-service-3.webp"
                className="img-fluid img-rounded"
                alt="gambar layanan"
              />
            </div>
            <div className="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
              <h4 className="mt-md-0 my-2">Karakter Fantasi</h4>
              <p>
                Makeup karakter fantasi merupakan seni yang menggabungkan
                kreativitas, keterampilan, dan imajinasi untuk menciptakan
                penampilan yang luar biasa dan menakjubkan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StickyWhatsAppIcon />
    </div>
  );
}
