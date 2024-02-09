import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import StickyWhatsAppIcon from '../components/StickyWhatsAppIcon';
import ServicesSection from '../components/ServicesSection';
import PriceList from '../components/PriceList';
import GoogleMapEmbed from '../components/GMaps';
import ContentUp from '../components/ContentUp';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <ContentUp />
      <section
        id="carouselExampleIndicators"
        className="carousel carousel-light slide content"
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
        <div className="container p-3">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-left">
              <div className="regular-content">
                <h1>Salon Irfan</h1>
                <h2>Salon Khusus Wanita</h2>
                <p className="tag-line">
                  &ldquo;Raih Tampilan Terbaikmu bersama Salon Irfan&ldquo;
                </p>
                <p>
                  Dapatkan pengalaman kecantikan terbaik di Salon Irfan! Nikmati
                  layanan profesional dari tim ahli kami, suasana yang nyaman,
                  dan tampilan terkini sesuai tren...
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <img
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
            <h5 className="display-6">
              Hubungi kami untuk melakukan pemesanan
            </h5>
            <p className="lead">Kami akan segera merespon Anda</p>
            <div className="mt-3 mb-4">
              <Link to="/pemesanan" className="btn btn-dark">
                <span>Klik Disini</span>
              </Link>
            </div>
            <hr />
            <h4>Lokasi Kami</h4>
            <GoogleMapEmbed />
          </div>
        </div>
      </section>
      <StickyWhatsAppIcon />
    </div>
  );
}
