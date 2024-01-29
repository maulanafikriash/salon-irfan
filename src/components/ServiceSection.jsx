/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="bg-light" id="services">
      <div className="container p-3">
        <h3 className="text-center m-4" data-aos="fade-down">Layanan</h3>
        <div className="row" data-aos="fade-up">
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src="assets/images/IMG-02-new.jpg"
                alt="Service Image"
                className="card-img-top img-fluid img-style"
              />
              <div className="card-body">
                <h4 className="card-title">Makeup Tradisional</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img
                src="assets/images/IMG-07-edit3.jpg"
                alt="Service Image"
                className="card-img-top img-fluid img-style"
              />
              <div className="card-body">
                <h4 className="card-title">Makeup Kemerdekaan</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4" data-aos="fade-up">
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src="assets/images/hair06-edit2.jpg"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h4 className="card-title">Colouring</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src="assets/images/hair01-edit.jpg"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h4 className="card-title">Bathing</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src="assets/images/hair07-edit2.jpg"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h4 className="card-title">Drying</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src="assets/images/hair08-edit4.jpg"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h4 className="card-title">Hair Cut</h4>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <Link to="/services" className="btn btn-dark">
              <span>
                Selengkapnya...
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
