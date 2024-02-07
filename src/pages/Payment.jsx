/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect } from 'react';
import AOS from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonLinkWhatsApp from '../components/ButtonLinkWhatsApp';
import StickyWhatsAppIcon from '../components/StickyWhatsAppIcon';
import ContentUp from '../components/ContentUp';

export default function Payment() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const downloadQRCode = () => {
    fetch('/assets/images/qr.png')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'QRCode-Pembayaran-Salon-Irfan.png';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(() => console.error('Terjadi kesalahan saat mengunduh QR Code.'));
  };

  return (
    <section className="py-5 content">
      <ContentUp />
      <div className="container py-md-2 p-3">
        <h3 className="heading text-center mb-2 mb-sm-3" tabIndex={0}>Pesan Layanan</h3>
        <div className="row mt-lg-5 mt-4 justify-content-center text-center hr-container">
          <ButtonLinkWhatsApp />
          <hr className="custom-hr" />
          <div className="col text-center" data-aos="fade-up">
            <div>
              <h5 className="mt-3" tabIndex={0}>Pembayaran Scan disini</h5>
              <LazyLoadImage
                src="/assets/images/qr.png"
                className="img-fluid rounded-qr"
                alt="Gambar QR Code pembayaran"
              />
            </div>
            <button onClick={downloadQRCode} className="btn btn-dark mt-2">Unduh QR Code</button>
            <p className="note">
              <i>
                *Note: Kirim screenshot bukti pembayaran ke WhatsApp
              </i>
              {' '}
            </p>
          </div>
        </div>
      </div>
      <StickyWhatsAppIcon />
    </section>
  );
}
