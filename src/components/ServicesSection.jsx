/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AOS from 'aos';
import ButtonLinkPage from './ButtonLinkPage';

export default function ServicesSection({ showButtonLink = true }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="bg-light" id="services">
      <div className="container p-3">
        <h3 className="text-center m-4" data-aos="fade-down">Layanan</h3>
        <div className="row" data-aos="fade-up">
          <div className="col-md-6">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/img-makeup.webp"
                alt="Service Image"
                className="card-img-top img-fluid img-style"
              />
              <div className="card-body">
                <h6 className="card-title">Makeup Tradisional</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <LazyLoadImage
                src="assets/images/img-ri.webp"
                alt="Service Image"
                className="card-img-top img-fluid img-style"
              />
              <div className="card-body">
                <h6 className="card-title">Makeup Kemerdekaan</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4" data-aos="fade-up">
          <div className="col-md-3">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/hair-color.webp"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title">Cat Rambut</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/facial.webp"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title">Facial Biasa</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/smooth-hair.webp"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title">Smoothing</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/hair-cut.webp"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title">Potong Rambut</h6>
              </div>
            </div>
          </div>
          {showButtonLink && <ButtonLinkPage />}
        </div>
      </div>
    </section>
  );
}
