import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonLinkPage() {
  return (
    <div className="mt-3 mb-3">
      <Link to="/layanan" className="btn btn-dark">
        <span>
          Selengkapnya...
        </span>
      </Link>
    </div>
  );
}
