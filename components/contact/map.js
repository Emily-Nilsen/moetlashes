import Image from 'next/image';

const Map = () => {
  return (
    <div className="object-cover w-full h-full">
      <Image
        src="/static/home/moet-hero.webp"
        alt="Moët Lashes"
        width={1500}
        height={1000}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default Map;

{
  /* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.0519472355945!2d145.77502235141785!3d-16.922729588301546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x697867d234fcefb7%3A0x6a54fdadd7fc308d!2sMo%C3%ABt%20Lashes!5e0!3m2!1sen!2sno!4v1652928289881!5m2!1sen!2sno"
        width="600"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe> */
}
