const AboutUs = () => (
  <div id="about" className="p-8 py-16 w-full relative">
        <div className="container  md:max-w-6xl gap-8 mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className="text-gray-600 pb-2 md:pb-8 p-4">
                <h2 className="text-3xl text-gray-700 font-bold mb-8 text-center">tentang <span className="text-pink-500 font-bold">ccmedia</span></h2>
                <p className="my-4">
                <span className="text-pink-500 font-bold">ccmedia</span> adalah rumah produksi yang menjalankan bisnis di sektor Industri Kreatif di Indonesia.
                    Profesional dalam produksi dan tim rekrutmen kami memiliki kemampuan, potensi, dan pengalaman untuk menciptakan media, desain, dan video kreatif serta komersial yang setara dengan standar kualitas Internasional.
                </p>
                <p>
                    Perusahaan membuat pemotretan photo dan video visual cinematic nyata komersial seperti TVC, Profil Perusahaan, Video Fitur, Video Produk, Seri, Video Youtube, Spot TV, Iklan Cetak, Buku Profil Perusahaan, dan Infografis untuk keperluan eksternal dan internal.
                </p>
            </div>
            <div>
                <h2 className="text-3xl text-gray-700 font-bold mb-4 md:mb-8 text-center">the <span className="text-pink-500 font-bold">team</span></h2>
                <div className="z-20 px-1 md:p-8 grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <img src="/images/Rama.jpg" className="transform scale-90"  />
                        <div className="text-xs text-center text-gray-500">
                            <span className="font-bold">Rama Kharisma </span> <br/> Video Editor
                        </div>
                    </div>
                    <div className="space-y-2">
                        <img src="/images/Ibeng.jpg" className="transform scale-100"/>
                        <div className="text-xs text-center text-gray-500"> <span className="font-bold">Ibeng</span></div>
                    </div>
                    <div className="space-y-2">
                    <img src="/images/Ifan 2.jpg" className="transform scale-90"  />
                    <div className="text-xs text-center text-gray-500 "> <span className="font-bold">Ichfan </span><br/> Music Aranger</div>
                </div>
            </div>
      
            </div>
         </div>
        <div className="w-full h-auto relative hidden md:block">
            <img className="absolute right-32 bottom-2" src="/images/ornament.png" alt="ornament" />
        </div>
        {/* <div className="w-full h-auto relative">
            <img className="sm:w-8 md:w-38 opacity-20 absolute md:left-32 bottom-2" src="/ccmedia-logo.png" alt="ccmedia" />
        </div> */}
    </div>
);

export default AboutUs;
