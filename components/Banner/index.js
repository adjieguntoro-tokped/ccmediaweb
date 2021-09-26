/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import './banner.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-scroll';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SlideHeadlines = () => (
  <Slider {...settings}>
    {/* <div className="text-center text-black text-3xl z-50">
      1
    </div>
    <div className="text-center text-black text-3xl">
      2
    </div>
    <div className="text-center text-black text-3xl">
      1
    </div>
    <div className="text-center text-black text-3xl">
      2
    </div>
    <div className="text-center text-black text-3xl">
      1
    </div>
    <div className="text-center text-black text-3xl">
      2
    </div> */}
    <div className="text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Mau bikin <br/> <span className="md:text-7xl">Video Cinematic</span></span><br className="hidden md:block" />{' '}
        <span className="block text-pink-600 xl:inline">Ga Perlu MAHAL</span>
      </h1>
      <div className="md:max-w-xl mx-auto">
        <p className="mt-3 px-4 text-base text-center text-gray-50 md:max-w-4xl w-full">
          Kami membantu bisnis tumbuh dengan berkolaborasi bersama media digital dan menerapkan iklan kreatif yang efektif
        </p>
      </div>
    </div>
    {/* <div className="text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
        <span className="inline">Our{' '}</span>
        <span className="text-pink-600 inline">Misson</span>
      </h1>
      <div className="max-w-sm md:max-w-xl mx-auto">
      <p className="mt-3 text-base text-center text-gray-300 sm:text-xs md:max-w-3xl mx-auto w-full md:px-12 md:py-4 md:text-lg">
      Misi kami adalah menghasilkan produk dengan kualitas terbaik yang bisa menyampaikan Rasa dengan bahasa visual, Perusahaan kami bermaksud membawa kreativitas ke dalam produk komersial dan branding perusahaan ke tingkat yang sama sekali baru, dengan mendorong orang untuk lebih tertarik pada buatan lokal. 
      <br/><br/>
      Pra produksi, produksi dan pasca produksi akan ditangani dengan kontrol yang baik berbasis kualitas adalah fokus utama kami. Manajemen yang sadar sepenuhnya dan kepuasan pelanggan adalah misi utama. 
      </p>
      </div>
    </div> */}
  </Slider>
)

const Banner1 = () => (
  <>
  <div className="relative w-full flex items-center h-screen py-12 overflow-hidden ">
    <div className="absolute z-20 bg-gray-900 h-screen w-full bg-opacity-90"></div>
    <div className="relative z-20 md:px-4 md:max-w-4xl h-auto mx-auto">
      <SlideHeadlines />
      {/* <div className="w-full h-auto relative">
        <img className="absolute -left-72 top-1" src="/images/ornament.png" alt="ornament" />
      </div> */}
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
    <div className="absolute w-full z-20 bottom-10 text-gray-300 flex items-center flex-col">
      <ArrowCircleDownIcon className="animate-bounce text-white w-8 mx-auto" />
    </div>
  </div>
  </>
);

export default Banner1;
