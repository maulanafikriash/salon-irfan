import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5 mb-4">
      <img src="assets/images/notFound.webp" alt="gambar server error" className="img-fluid image-not-found" />
      <p className="mt-4">Maaf, halaman tujuan Anda tidak ditemukan</p>
      <button
        type="button"
        className="btn btn-dark mt-3 mb-3"
        onClick={() => navigate('/')}
      >
        Kembali ke beranda
      </button>
    </div>
  );
}
