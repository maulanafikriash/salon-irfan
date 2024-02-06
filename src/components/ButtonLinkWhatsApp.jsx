/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export default function ButtonLinkWhatsApp() {
  const message = encodeURIComponent(
    'Halo, saya tertarik untuk memesan layanan yang ditawarkan oleh Salon Irfan. Bisakah Anda memberi tahu saya informasi secara lengkap mengenai layanan yang ditawarkan tersebut ?',
  );
  return (
    <div className=" mb-3 pb-3 pt-2">
      <button className="btn btn-dark btn-whatsapp">
        <a
          href={`https://wa.me/+6288214475344?text=${message}`}
          target="_blank"
          aria-label="Hubungi kami melalui whatsApp"
          rel="noopener noreferrer"
        >
          Pesan Lewat WhatsApp
        </a>
      </button>
    </div>
  );
}
