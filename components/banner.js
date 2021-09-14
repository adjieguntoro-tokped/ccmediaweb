const Banner = () => (
  <div className="relative flex items-center justify-center h-screen overflow-hidden">
    <div className="sm:text-center px-6 lg:text-left relative z-30">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Mau bikin Video Cinematic</span>{' '}
        <span className="block text-pink-600 xl:inline">Ga Perlu MAHAL</span>
      </h1>
      {/* <p className="mt-3 text-base text-gray-50 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
        fugiat veniam occaecat fugiat aliqua.
      </p> */}
      {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Live demo
          </a>
        </div>
      </div> */}
    </div>
    <div className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
      <img className="object-cover md:object-contain h-screen md:h-auto" src="/pexels-vlad-chețan-1529360.jpg" />
    </div>
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
