/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import AOS from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StickyWhatsAppIcon from '../components/StickyWhatsAppIcon';
import ContentUp from '../components/ContentUp';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <ContentUp />
      <section className="py-4 content">
        <div className="container py-md-4 p-4">
          <h3 className="heading text-center mb-3 mb-sm-5 regular-content-sub" data-aos="fade-down">
            Sekilas Tentang Kami
          </h3>
          <div className="row mt-lg-5 mt-3" data-aos="fade-up">
            <div className="col-md-5">
              <LazyLoadImage
                src="assets/images/room.webp"
                alt="gambar tentang salon irfan"
                className="img-fluid img-rounded"
              />
            </div>
            <div className="col-md-7 content-left-bottom text-left mt-3">
              <h5 className="mt-1 regular-content-sub">Salon Irfan</h5>
              <p className="mt-2 text-left">
                Salon Irfan merupakan destinasi kecantikan yang eksklusif,
                menawarkan pengalaman penuh gaya dan perawatan untuk para
                pelanggannya. Dengan reputasi yang solid di industri kecantikan,
                Salon Irfan menonjolkan tim ahli kecantikan yang berdedikasi
                untuk memberikan layanan berkualitas tinggi, serta berfokus pada
                tren terkini dan inovasi dalam layanan.
              </p>
              <p>
                Suasana salon yang
                nyaman dan ramah menciptakan lingkungan yang mengundang
                pelanggan untuk bersantai dan menikmati suasana yang tenang. Dengan
                kombinasi keterampilan profesional dan perhatian personal, Salon
                Irfan berkomitmen untuk memberikan pengalaman kecantikan yang
                unik dan memuaskan bagi setiap pelanggan.
              </p>
            </div>
          </div>
          <div className="row mt-lg-5 mt-3 py-3" data-aos="fade-up">
            <div className="col-md-7 content-left-bottom text-left mt-3">
              <h5 className="mt-1 regular-content-sub">
                Kreasi Makeup Unik di Salon Irfan, Menyulap Fantasi Film dan
                Tren Terkini Menjadi Kenyataan.
              </h5>
              <p className="mt-2 text-left">
                Di Salon Irfan, kami tak hanya menawarkan layanan makeup
                konvensional, tapi juga spesialisasi dalam kreasi makeup unik
                yang disesuaikan dengan selera pribadi. Dengan keahlian dan
                kreativitas kami, kami mampu mengubah wajah menjadi menakjubkan,
                merefleksikan karakter film favorit atau mengikuti tren makeup
                terkini.
              </p>
              <p>
                Apakah Anda ingin bertransformasi menjadi karakter ikonik dari
                film terkenal, atau mencoba gaya makeup yang sedang menjadi
                trend kami siap untuk mewujudkan keinginan Anda. Kami
                berdedikasi untuk menciptakan tampilan yang unik dan personal,
                memastikan bahwa setiap pelanggan yang meninggalkan salon kami
                dengan rasa percaya diri dan kepuasan yang luar biasa. Di Salon
                Irfan, kami bersemangat untuk membawa ide-ide kreatif menjadi
                kenyataan.
              </p>
            </div>
            <div className="col-md-5 mt-lg-0 mt-3">
              <LazyLoadImage
                src="assets/images/img-fantasi.webp"
                alt="gambar tentang salon irfan"
                className="img-fluid img-rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-md-4 p-3" data-aos="fade-up">
          <h3 className="heading text-center mb-3 mb-sm-5">Owner</h3>
          <div className="row mt-lg-5 mt-4 justify-content-center">
            <div className="col text-center">
              <div className="mb-4 ">
                <LazyLoadImage
                  src="/assets/images/owner.webp"
                  className="img-fluid rounded-owner"
                  alt="gambar pemilik salon"
                />
              </div>
              <div>
                <h4 className="mt-3">Catharina</h4>
                <p>
                  Seorang
                  <i> MUA Character </i>
                  yang berbakat,
                  <i> lulusan D3 AKS-AKK Yogyakarta. </i>
                  Dengan keterampilan seni rias yang unik, mampu menciptakan
                  transformasi karakter yang menakjubkan. Dedikasi tinggi
                  terhadap detail dan keahlian dalam mencocokkan riasan dengan
                  tema tertentu, membuatnya menjadi seorang yang ahli untuk
                  menciptakan tampilan yang berbeda dan mengesankan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StickyWhatsAppIcon />
    </div>
  );
}
