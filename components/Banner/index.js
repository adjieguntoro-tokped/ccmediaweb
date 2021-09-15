/* eslint-disable @next/next/no-img-element */
import './banner.module.css';

const Banner = () => (
  <div className="relative flex items-center justify-center h-screen py-12 overflow-hidden bg-gray-900 banner-area wavesshape">
    <div className="sm:text-center px-6 lg:text-left relative max-w-4xl h-auto mx-auto">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Mau bikin Video Cinematic</span><br className="hidden md:block" />{' '}
        <span className="block text-pink-600 xl:inline">Ga Perlu MAHAL</span>
      </h1>
      <p className="mt-3 text-base text-gray-50 sm:mt-5 sm:text-lg sm:max-w-xl md:max-w-3xl md:w-full sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Kami membantu bisnis tumbuh dengan berkolaborasi bersama media digital dan menerapkan iklan kreatif yang efektif
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-2 md:text-lg md:px-5"
          >
            Tentang Kami
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 md:py-2 md:text-lg md:px-5"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
      <div className="w-full h-auto relative">
        <img className="absolute -left-72 top-1" src="/images/ornament.png" alt="ornament" />
      </div>
    </div>
    {/* <div className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
      <img className="object-cover md:object-contain h-screen md:h-auto" src="/pexels-vlad-chețan-1529360.jpg" />
    </div> */}
    {/* <video
      autoPlay
      loop
      muted
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source
        src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video> */}
  </div>
);

export default Banner;
