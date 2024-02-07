/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';

export default function PriceList() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [hairTreatments] = useState([
    { name: 'Gunting Rambut Anak', price: '10.000' },
    { name: 'Gunting Rambut Dewasa', price: '15.000' },
    { name: 'Gunting Rambut + Keramas + Blow', price: '35.000' },
    { name: 'Keramas + Blow', price: '20.000' },
    { name: 'Cat Rambut', price: '60.000' },
    { name: 'Creambath', price: '45.000' },
    { name: 'Rebonding/Smoothing', price: '250.000' },
  ]);

  const [otherTreatments] = useState([
    { name: 'Totok Wajah', price: '35.000' },
    { name: 'Lulur + Body Massage', price: '100.000' },
    { name: 'Facial Galvanic', price: '150.000' },
    { name: 'Makeup Anak', price: '70.000' },
    { name: 'Makeup Dewasa', price: '150.000' },
    { name: 'Makeup Karakter', price: '200.000' },
    { name: 'Sewa Baju Adat Anak', price: '100.000' },
  ]);

  return (
    <section className="pricing">
      <div className="container p-3">
        <h3 className="text-center regular-font-table m-4" data-aos="fade-down">Daftar Harga</h3>
        <div className="table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered table-rounded">
            <thead>
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
              {hairTreatments.map((item, index) => (
                <tr key={index} className="text-center regular-font-table-sub">
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered table-rounded">
            <thead>
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
              {otherTreatments.map((item, index) => (
                <tr key={index} className="text-center regular-font-table-sub">
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
