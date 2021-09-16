const AboutUs = () => (
  <div id="about" className="p-8 py-16 w-full relative">
        <div className="container max-w-xl mx-auto">
            {/* <div className="row"> */}
                <div className="text-gray-600 pb-8">
                    <h2 className="text-3xl text-gray-700 font-bold mb-8 text-center">tentang <span className="text-pink-500 font-bold">ccmedia</span></h2>
                    <p className="my-4">
                    <span className="text-pink-500 font-bold">ccmedia</span> adalah rumah produksi yang menjalankan bisnis di sektor Industri Kreatif di Indonesia.
                        Profesional dalam produksi dan tim rekrutmen kami memiliki kemampuan, potensi, dan pengalaman untuk menciptakan media, desain, dan video kreatif serta komersial yang setara dengan standar kualitas Internasional.
                    </p>
                    <p>
                        Perusahaan membuat pemotretan photo dan video visual cinematic nyata komersial seperti TVC, Profil Perusahaan, Video Fitur, Video Produk, Seri, Video Youtube, Spot TV, Iklan Cetak, Buku Profil Perusahaan, dan Infografis untuk keperluan eksternal dan internal.
                    </p>
                    {/* <h3>Why Choose Us</h3>
                    <ul>
                        <li>
                            <i className="fas fa-check-double"></i> Elderly is detract tedious assured private
                        </li>
                        <li>
                            <i className="fas fa-check-double"></i> Do travelling companions contrasted
                        </li>
                        <li>
                            <i className="fas fa-check-double"></i> Mistress strongly remember up
                        </li>
                        <li>
                            <i className="fas fa-check-double"></i> Branched is on an ecstatic directly it
                        </li>
                    </ul>
                    <a href="#" className="btn circle btn-theme effect btn-md">Read more</a> */}
                </div>
                {/* <div className="grid grid-cols-2 gap-8 text-center ">
                    <div className="col-md-6 col-sm-6 equal-height ">
                        <div className="h-full bg-cover rounded-xl" style={{backgroundImage: 'url(/images/pexels-pixabay-356043.jpg)'}}>
                            <a href="#">
                                <i className="flaticon-jigsaws"></i>
                                <h4>Creative Solutions</h4>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 equal-height">
                        <div className="h-full bg-cover rounded-xl" style={{backgroundImage: 'url(/images/pexels-pixabay-356043.jpg)'}}>
                            <a href="#">
                                <i className="flaticon-sketch"></i>
                                <h4>Custom Design</h4>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 equal-height">
                        <div className="h-full bg-cover rounded-xl" style={{backgroundImage: 'url(/images/pexels-pixabay-356043.jpg)'}}>
                            <a href="#">
                                <i className="flaticon-technical-support"></i>
                                <h4>Technical Support</h4>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 equal-height">
                        <div className="h-full bg-cover rounded-xl" style={{backgroundImage: 'url(/images/pexels-pixabay-356043.jpg)'}}>
                            <a href="#">
                                <i className="flaticon-checked"></i>
                                <h4>Best Quality</h4>
                            </a>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
        <div className="w-full h-auto relative">
            <img className="absolute right-32 bottom-2" src="/images/ornament.png" alt="ornament" />
        </div>
        <div className="w-full h-auto relative">
            <img className="sm:w-8 md:w-38 opacity-20 absolute md:left-32 bottom-2" src="/ccmedia-logo.png" alt="ccmedia" />
        </div>
    </div>
);

export default AboutUs;
