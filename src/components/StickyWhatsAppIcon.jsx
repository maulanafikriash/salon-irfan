/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function StickyWhatsAppIcon() {
  return (
    <div className="whatsapp-icon">
      <a href="https://wa.me/+6288214475344" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default StickyWhatsAppIcon;
