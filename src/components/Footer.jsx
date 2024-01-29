/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';

export default function Footer() {
  return (
    <footer className="text-light footer-container" id="footer">
      <div className="layer py-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4 footer-subb">
              <h2 className="top-content">Salon Irfan</h2>
              <p className="my-3">
                kami menawarkan layanan kecantikan yang disesuaikan untuk setiap
                pelanggan. Kami percaya bahwa kecantikan sejati berasal dari
                perpaduan antara kepribadian, gaya, dan kesejahteraan.
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
                <h3 className="mb-3 top-content">Salon Buka</h3>
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
                      salonirfan@gmail.com
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
                <a href="#" className="text-light">
                  <span className="fa fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <span className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <span className="fa fa-dribbble" />
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <span className="fa fa-vk" />
                </a>
              </li>
            </ul>
          </div>
          <div className="move-top text-right">
            <a href="#home" className="move-top">
              <span className="fa fa-angle-up  mb-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
