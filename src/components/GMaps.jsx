import React from 'react';

function GoogleMapEmbed() {
  const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.500654273473!2d107.03165757387652!3d-6.197483060712062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6989390997e13f%3A0x9fd402f80cbba16c!2sSALON%20IRFAN!5e0!3m2!1sid!2sid!4v1706378182480!5m2!1sid!2sid';

  return (
    <div className="mt-4 map-responsive">
      <iframe
        title="lokasi salon irfan"
        width="600"
        height="450"
        style={{ border: 0 }}
        src={mapSrc}
        allowFullScreen
      />
    </div>
  );
}

export default GoogleMapEmbed;
