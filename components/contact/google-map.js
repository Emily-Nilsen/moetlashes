import Image from 'next/image';

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.051947235595!2d145.77502235134327!3d-16.922729588301532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x697867d234fcefb7%3A0x6a54fdadd7fc308d!2sMo%C3%ABt%20Lashes!5e0!3m2!1sen!2sno!4v1654257024148!5m2!1sen!2sno"
      width="600"
      height="600"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="absolute top-0 left-0 w-full h-full"
    ></iframe>
  );
};

export default GoogleMap;
