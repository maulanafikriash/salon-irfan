import React, { useEffect } from 'react';
import AOS from 'aos';

export default function PriceList() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="pricing">
      <div className="container p-3">
        <h3 className="text-center regular-font-table m-4" data-aos="fade-down">Daftar Harga</h3>

        <div className="table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered">
            <thead>
              {/* Hair Treatment */}
              <tr className="table-dark">
                <td colSpan="2" className="text-center regular-font-table">
                  <strong>HAIR TREATMENT</strong>
                </td>
              </tr>
              <tr className="text-center regular-font-table">
                <th scope="col">Treatment</th>
                <th scope="col">Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center regular-font-table-sub">
                <td>Gunting Rambut Anak</td>
                <td>Rp 10.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Gunting Rambut Dewasa</td>
                <td>Rp 15.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Gunting Cuci Blow</td>
                <td>Rp 35.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Cuci Blow</td>
                <td>Rp 20.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Cat Warna</td>
                <td>Rp 85.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Catok</td>
                <td>Rp 40.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Curly</td>
                <td>Rp 50.000</td>
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
                  <strong>FACE & BODY TREATMENT</strong>
                </td>
              </tr>
              <tr className="text-center regular-font-table">
                <th scope="col">Treatment</th>
                <th scope="col">Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center regular-font-table-sub">
                <td>Totok Wajah</td>
                <td>Rp 35.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Lulur</td>
                <td>Rp 80.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Lulur + Body Massege Zaitun</td>
                <td>Rp 100.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Sanggul Anak</td>
                <td>Rp 35.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Make up Dewasa</td>
                <td>Rp 150.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Make up Anak</td>
                <td>Rp 70.000</td>
              </tr>
              <tr className="text-center regular-font-table-sub">
                <td>Rapikan Alis</td>
                <td>Rp 10.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
