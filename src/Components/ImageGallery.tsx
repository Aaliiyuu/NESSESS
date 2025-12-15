"use client";
import Image from "next/image";
import Comple from "@/images/comple2.jpg";
import ME1 from "@/images/ME1.jpg"
import ME2  from "@/images/ME2.jpg"
import ME3 from "@/images/ME3.jpg"
import ME4 from "@/images/ME4.jpg"
import M5 from "@/images/M5.jpg"



const ImageGallery = () => {
  const images = [
    { src: Comple, alt: "Spagyric medicine preparation" },
    { src: ME1, alt: "Herbal ingredients for spagyric remedies" },
    { src: ME2, alt: "EH-CAM clinical services facility" },
    { src: ME3, alt: "Spagyric medicine products" },
    { src: ME4, alt: "Laboratory equipment for remedy preparation" },
    { src: M5, alt: "Practitioner working with spagyric solutions" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Spagyric Medicine Gallery
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Explore our clinical practice, remedy preparation process, and the
          science behind EH-CAM Spagyric Medicine.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-lg">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-300 inline-flex items-center">
            View Full Gallery
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;