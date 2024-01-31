/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StickyWhatsAppIcon from '../components/StickyWhatsAppIcon';

export default function CardGallery() {
  return (
    <div>
      <div className="container py-4">
        <div className="jumbotron text-center">
          <h3 className="p-3">Galeri Kami</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, alias
            minima odio et minus ducimus est! Laborum reprehenderit laboriosam
            maiores excepturi exercitationem rerum consequuntur fugiat natus,
            ducimus temporibus doloremque error.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/......."
              data-lightbox="Gallery"
              data-title="Lomba dulu gass"
            >
              <LazyLoadImage src="assets/images/......." alt="gambar galeri" className="img-fluid" />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/......."
              data-lightbox="Gallery"
              data-title="Lomba dulu gass"
            >
              <LazyLoadImage src="assets/images/......." alt="gambar galeri" className="img-fluid" />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/......."
              data-lightbox="Gallery"
              data-title="Lomba dulu gass"
            >
              <LazyLoadImage src="assets/images/......." alt="gambar galeri" className="img-fluid" />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/......."
              data-lightbox="Gallery"
              data-title="Lomba dulu gass"
            >
              <LazyLoadImage src="assets/images/......." alt="gambar galeri" className="img-fluid" />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/......."
              data-lightbox="Gallery"
              data-title="Lomba dulu gass"
            >
              <LazyLoadImage src="assets/images/......." alt="gambar galeri" className="img-fluid" />
            </a>
          </div>
          <div className="col-lg-4 mb-3">
            <a
              href="assets/images/......."
              data-lightbox="Gallery"
              data-title="Lomba dulu gass"
            >
              <LazyLoadImage src="assets/images/......." alt="gambar galeri" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
      <StickyWhatsAppIcon />
    </div>
  );
}
