/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
// import './banner.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-scroll';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  fade: true,
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
    <div className="sm:text-left md:text-center p-2 max-w-2lg mx-auto py-8">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Mau bikin <br/> <span className="md:text-7xl">Video Cinematic</span></span><br className="hidden md:block" />{' '}
        <span className="block text-pink-600 xl:inline">Ga Perlu MAHAL</span>
      </h1>
      <div className="md:max-w-xl mx-auto">
        <p className="mt-3 text-left text-md md:text-base md:text-center text-gray-300 md:max-w-4xl w-full">
          Kami membantu bisnis tumbuh dengan berkolaborasi bersama media digital dan menerapkan iklan kreatif yang efektif
        </p>
      </div>
    </div>
    <div className="text-left p-2 max-w-2lg">
      <h1 className="md:text-center text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
        <span className="inline">Our{' '}</span>
        <span className="text-pink-600 inline">Mission</span>
      </h1>
      <div className="max-w-sm md:max-w-xl mx-auto">
        <p className="mt-3 sm:text-left md:text-center text-gray-300 text-sm md:max-w-3xl mx-auto w-full md:px-12 md:py-4 md:text-lg">
        Misi kami adalah menghasilkan produk dengan kualitas terbaik yang bisa menyampaikan Rasa dengan bahasa visual, Perusahaan kami bermaksud membawa kreativitas ke dalam produk komersial dan branding perusahaan ke tingkat yang sama sekali baru, dengan mendorong orang untuk lebih tertarik pada buatan lokal. 
        <br/><br/>
        Pra produksi, produksi dan pasca produksi akan ditangani dengan kontrol yang baik berbasis kualitas adalah fokus utama kami. Manajemen yang sadar sepenuhnya dan kepuasan pelanggan adalah misi utama. 
        </p>
      </div>
    </div>
    <div className="text-left p-2 my-auto max-w-2lg">
      <h1 className="md:text-center text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
        <span className="inline">Our{' '}</span>
        <span className="text-pink-600 inline">Vision</span>
      </h1>
      <div className="max-w-sm md:max-w-xl mx-auto">
        <p className="mt-3 sm:text-left md:text-center text-gray-300 text-sm md:max-w-3xl mx-auto w-full md:px-12 md:py-4 md:text-lg">
        Visi kami adalah menjadi rumah produksi terkemuka dengan kreativitas dengan karakter sinematik dan membawa komersial ke era digital berikutnya.
        <br/><br/>
        Dengan Pengalaman dan wawasan yang sangat terlatih, kami mengkhususkan diri pada berbagai media komunikasi visual untuk menghasilkan pekerjaan dengan kualitas terbaik dalam waktu yang efektif 
        </p>
      </div>
    </div>
  </Slider>
)

const Headlines = () => (
  <>
    <div className="bg-gray-800 h-screen items-center flex">
      <div className="w-full p-10 max-w-3xl mx-auto relative">
        <div className="max-w-2lg relative z-20 h-auto mx-auto">
          <SlideHeadlines />
        </div>
        {/* <div className="w-full h-auto absolute">
          <img className="absolute -left-72 top-1" src="/images/ornament.png" alt="ornament" />
        </div> */}
      </div>
      <div className="absolute min-h-screen min-w-screen">
        <video
          autoPlay
          loop
          muted
          poster="/the-ritz-frame-008.jpeg"
          className="opacity-10 h-screen object-cover mx-auto w-screen"
        >
        <source
          src="/the-ritz.mp4"
          type="video/mp4"
          className="opacity-5"
        />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute w-full z-20 bottom-10 text-gray-300 flex items-center flex-col">
        <ArrowCircleDownIcon className="animate-bounce text-white w-8 mx-auto" />
      </div>
    </div>
  </>
);

export default Headlines;
