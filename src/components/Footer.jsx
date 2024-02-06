/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import { GoMoveToTop } from 'react-icons/go';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-light footer-container" id="footer">
      <div className="layer py-4">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="top-content">Salon Irfan</h2>
              <p className="my-3">
                kami menawarkan layanan kecantikan yang disesuaikan untuk setiap
                pelanggan. Kami yakin bahwa keindahan yang sejati berasal dari
                harmoni antara kepribadian, tampilan, dan kenyamanan
              </p>
              <p>
                Sehingga
                setiap layanan kami dirancang untuk tidak hanya memperbarui
                penampilan Anda, tapi juga untuk meningkatkan kepercayaan diri
                dan kenyamanan Anda.
              </p>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-4">
              <div>
                <h3 className="mb-3 top-content">Jam Operasional</h3>
                <hr className="bg-light" />
                <ul className="list-unstyled">
                  <li>
                    <p>Senin - Jumat 05.30 - 21.00 WIB</p>
                  </li>
                  <li className="my-2">
                    <p>Sabtu - Minggu 05.30 - 21.00 WIB</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-4">
              <div>
                <h3 className="mb-3 top-content">Hubungi Kami</h3>
                <hr className="bg-light" />
                <div>
                  <p>
                    <a href="" className="text-light">
                      salonirfan37@gmail.com
                    </a>
                  </p>
                </div>
                <div className="my-2">
                  <p>0882-1447-5344</p>
                </div>
                <div>
                  <p>
                    Jl. Flamboyan Raya 1 No.45, Kebalen, Kec. Babelan, Kabupaten
                    Bekasi, Jawa Barat 17610
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center my-sm-4 my-4">&#169; 2024 Salon Irfan.</p>
          <div className="text-center mt-4">
            <ul className="list-unstyled social-icons">
              <li>
                <a href="https://m.facebook.com/catrin.t.7/" className="text-light" target="_blank">
                  <FaFacebook size={25} />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@catharina_salon.irfan" className="text-light" target="_blank">
                  <FaTiktok size={25} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/catharina_salon_irfan/" className="text-light" target="_blank">
                  <FaInstagram size={25} />
                </a>
              </li>
            </ul>
          </div>
          <div className="move-top text-right">
            <a href="#home" className="move-top">
              <GoMoveToTop />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
