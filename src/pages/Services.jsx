/* eslint-disable react/no-unescaped-entities */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaRegFrown } from 'react-icons/fa';
import StickyWhatsAppIcon from '../components/StickyWhatsAppIcon';
import ContentUp from '../components/ContentUp';
import { servicesData } from '../data/servicesData';
import SearchServices from '../components/SearchServices';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <ContentUp />
      <section className="py-4 content" id="service-page">
        <div className="container py-md-4 p-3" data-aos="fade-up">
          <h3 className="heading text-center mb-3 mb-sm-5" data-aos="fade-down">Layanan</h3>

          <SearchServices searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          <div className="row">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div key={service.id} className="col-md-4 mb-4">
                  <div className="card h-100 img-rounded">
                    <LazyLoadImage src={service.image} className="card-img-top rounded-top" alt="gambar layanan" />
                    <div className="card-body">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center mt-5">
                <div className="mb-3">
                  <FaRegFrown size={50} />
                </div>
                <p>
                  Tidak ada hasil untuk "
                  {searchQuery}
                  ". Silakan coba kata kunci lain.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <StickyWhatsAppIcon />
    </div>
  );
}
