/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StickyWhatsAppIcon from '../components/StickyWhatsAppIcon';
import ContentUp from '../components/ContentUp';

export default function CardGallery() {
  return (
    <div>
      <ContentUp />
      <div className="container py-4 content">
        <div className="jumbotron text-center">
          <h3 className="p-3">Galeri Kami</h3>
          <p>
            Temukan inspirasi kecantikan terbaru dan eksplorasi kreativitas
            tanpa batas di Galeri Kami. Dari makeover adat yang autentik hingga
            teknik makeup modern, setiap gambar mempersembahkan kisah unik
            keahlian dan dedikasi tim Salon Irfan dalam menghadirkan kecantikan
            yang memukau dan personalitas yang bersinar.
          </p>
        </div>
      </div>

      <div className="container py-4 mb-4">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/gallery/img-1.webp"
              data-lightbox="Gallery"
              data-title="Makeup Adat"
            >
              <LazyLoadImage
                src="assets/images/gallery/img-1.webp"
                alt="gambar galeri"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/gallery/img-2.webp"
              data-lightbox="Gallery"
              data-title="Makeup Adat"
            >
              <LazyLoadImage
                src="assets/images/gallery/img-2.webp"
                alt="gambar galeri"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/gallery/img-3.webp"
              data-lightbox="Gallery"
              data-title="Makeup Adat"
            >
              <LazyLoadImage
                src="assets/images/gallery/img-3.webp"
                alt="gambar galeri"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/gallery/img-4.webp"
              data-lightbox="Gallery"
              data-title="Perawatan Rambut"
            >
              <LazyLoadImage
                src="assets/images/gallery/img-4.webp"
                alt="gambar galeri"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/gallery/img-5.webp"
              data-lightbox="Gallery"
              data-title="Facial"
            >
              <LazyLoadImage
                src="assets/images/gallery/img-5.webp"
                alt="gambar galeri"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/gallery/img-6.webp"
              data-lightbox="Gallery"
              data-title="Smoothing"
            >
              <LazyLoadImage
                src="assets/images/gallery/img-6.webp"
                alt="gambar galeri"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/gallery/img-7.webp"
              data-lightbox="Gallery"
              data-title="Cat Rambut"
            >
              <LazyLoadImage
                src="assets/images/gallery/img-7.webp"
                alt="gambar galeri"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/gallery/img-8.webp"
              data-lightbox="Gallery"
              data-title="Makeup karakter"
            >
              <LazyLoadImage
                src="assets/images/gallery/img-8.webp"
                alt="gambar galeri"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/gallery/img-9.webp"
              data-lightbox="Gallery"
              data-title="Makeup karakter Nenek"
            >
              <LazyLoadImage
                src="assets/images/gallery/img-9.webp"
                alt="gambar galeri"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
      <StickyWhatsAppIcon />
    </div>
  );
}
