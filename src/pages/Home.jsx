import React, { useEffect } from 'react';
import AOS from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StickyWhatsAppIcon from '../components/StickyWhatsAppIcon';
import ServicesSection from '../components/ServicesSection';
import PriceList from '../components/PriceList';
import GoogleMapEmbed from '../components/GMaps';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src="assets/images/baner1.webp"
              className="d-block w-100 change-style "
              alt="gambar salon"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/baner2.webp"
              className="d-block w-100 change-style "
              alt="gambar salon"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/baner3.webp"
              className="d-block w-100 change-style "
              alt="gambar salon"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </section>
      <section className="py-4 text-left">
        <div className="container p-4">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-left">
              <div className="regular-content">
                <h1>Salon Irfan</h1>
                <h2>Salon Khusus Wanita</h2>
                <p>&ldquo;Raih Tampilan Terbaikmu bersama Salon Irfan&ldquo;</p>
                <p>
                  kami menawarkan layanan kecantikan yang disesuaikan untuk
                  setiap pelanggan. Kami yakin bahwa keindahan yang sejati
                  berasal dari harmoni antara kepribadian, tampilan, dan
                  kenyamanan sehingga setiap layanan kami dirancang untuk tidak
                  hanya memperbarui penampilan Anda, tapi juga untuk
                  meningkatkan kepercayaan diri dan kenyamanan Anda.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <LazyLoadImage
                src="assets/images/logo-salon.webp"
                className="img-fluid rounded-logo mx-auto"
                alt="logo salon irfan"
              />
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <PriceList />
      <section className="bg-light py-4">
        <div className="container py-md-4" data-aos="fade-up">
          <div className="text-center">
            <h6 className="display-6">
              Hubungi kami untuk melakukan pemesanan
            </h6>
            <p className="lead">Kami akan segera merespon Anda</p>
            <hr />
            <h4 className="">Lokasi Kami</h4>
            <GoogleMapEmbed />
          </div>
        </div>
      </section>
      <StickyWhatsAppIcon />
    </div>
  );
}
