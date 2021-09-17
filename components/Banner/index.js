/* eslint-disable @next/next/no-img-element */
import './banner.module.css';
import { Link } from 'react-scroll';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';


const Banner = () => (
  <div className="relative flex items-center justify-center h-screen py-12 overflow-hidden bg-gray-900 banner-area wavesshape">
    <div className="absolute z-20 bg-gray-900 h-screen w-full bg-opacity-90"></div>
    <div className="relative z-20 px-8 sm:text-center md:px-4 lg:text-left max-w-4xl h-auto mx-auto">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Mau bikin <br/> <span className="text-6xl md:text-7xl">Video Cinematic</span></span><br className="hidden md:block" />{' '}
        <span className="block text-pink-600 xl:inline">Ga Perlu MAHAL</span>
      </h1>
      <p className="mt-3 text-base text-gray-50 sm:mt-5 sm:text-lg sm:max-w-xl md:max-w-3xl md:w-full sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Kami membantu bisnis tumbuh dengan berkolaborasi bersama media digital dan menerapkan iklan kreatif yang efektif
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <Link to="about" smooth duration={600} offset={-50}
            href="#"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-2 md:text-lg md:px-5"
          >
            Tentang Kami
          </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Link to="contact" smooth duration={600}
            href="#"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 md:py-2 md:text-lg md:px-5"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
      <div className="w-full h-auto relative">
        <img className="absolute -left-72 top-1" src="/images/ornament.png" alt="ornament" />
      </div>
    </div>
    <video
        autoPlay
        loop
        muted
        poster="/the-ritz-frame-008.jpeg"
        className="absolute bg-gray-900 object-fill -z-10 w-auto min-w-full max-h-screen max-w-none"
      >
      <source
        src="/the-ritz.mp4"
        type="video/mp4"
        className="opacity-10"
      />
      Your browser does not support the video tag.
    </video>
    <div className="absolute z-20 bottom-20 text-gray-300 flex items-center flex-col">
      <ArrowCircleDownIcon className="animate-bounce text-white w-8" />
    </div>
  </div>
);

export default Banner;
