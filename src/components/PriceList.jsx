import React, { useEffect } from 'react';
import AOS from 'aos';

export default function PriceList() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="container p-3">
        <h3 className="text-center regular-font-table m-4" data-aos="fade-down">Daftar Harga</h3>

        <div className="table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered">
            <thead>
              {/* Hair Treatment */}
              <tr className="table-dark">
                <td colSpan="2" className="text-center regular-font-table">
                  <strong>PERAWATAN RAMBUT</strong>
                </td>
              </tr>
              <tr className="text-center regular-font-table">
                <th scope="col">Nama Perawatan</th>
                <th scope="col">Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center regular-font-table-sub">
                <td>Gunting Rambut Anak</td>
                <td>15.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Gunting Rambut Dewasa</td>
                <td>25.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Gunting Rambut + Keramas + Blow</td>
                <td>35.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Keramas + Blow</td>
                <td>20.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Cat Rambut</td>
                <td>85.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Catok</td>
                <td>40.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Curly</td>
                <td>50.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered">
            <thead>
              {/* Face and Body Treatment */}
              <tr className="table-dark">
                <td colSpan="2" className="text-center regular-font-table">
                  <strong>LAINNYA</strong>
                </td>
              </tr>
              <tr className="text-center regular-font-table">
                <th scope="col">Nama Perawatan</th>
                <th scope="col">Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center regular-font-table-sub">
                <td>Totok Wajah</td>
                <td>35.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Lulur</td>
                <td>80.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Facial Galvanic</td>
                <td>150.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Makeup Anak</td>
                <td>70.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Makeup Dewasa</td>
                <td>150.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Makeup Karakter</td>
                <td>200.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Sewa Baju Adat Anak</td>
                <td>100.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
