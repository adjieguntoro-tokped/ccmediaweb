import { VideoCameraIcon, MusicNoteIcon, CameraIcon } from '@heroicons/react/solid';

const OurServices = () => (
  <div id="our-services" className="p-8 py-16 w-full relative bg-pink-50">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto mb-12 text-center space-y-2">
          <h2 className="text-3xl text-gray-700 font-bold  text-center">layanan <span className="text-pink-500 font-bold">ccmedia</span></h2>
          <p className="text-lg text-gray-600">
            Keahlian kami di bidang produksi komersial meliputi:
          </p>
          </div>
          <div className="sm:grid-cols-1 md:grid-cols-3 grid gap-8 max-w-4xl mx-auto">
            <div className="rounded-lg bg-white shadow px-6 py-8">
              <div className="text-center">
                
                <div className="p-4 bg-pink-50 w-20 h-20 mb-4  flex items-center rounded-full text-center mx-auto border border-pink-400 border-2">
                  <VideoCameraIcon className="w-14 text-pink-500 " />
                </div>
                <h3 className="items-center justify-center gap-1 font-bold mx-auto text-2xl">
                  <span className="text-gray-600">Video Production</span>
                </h3>
                <ul className="text-gray-700 text-sm space-y-3 my-4 text-center">
                  <li>TV Commercial</li>
                  <li>Video Internal, Viral & Filler (Youtube, Instagram & other Social Media)</li>
                  <li>Company Profile</li>
                  <li>Video Product</li>
                  <li>Video Tutorial</li>
                  <li>Video Brand</li>
                  <li>Video Infographic</li>
                  <li>Video Multimedia Stage</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow px-6 py-8">
              <div className="text-center">
                
                <div className="p-4 bg-pink-50 w-20 h-20 mb-4  flex items-center rounded-full text-center mx-auto border border-pink-400 border-2">
                    <MusicNoteIcon className="w-14 text-pink-500 " />
                </div>
                
                <h3 className="items-center justify-center gap-1 font-bold mx-auto text-2xl">
                  <span className="text-gray-600">Commercial Spot</span>
                </h3>
                <ul className="text-gray-700 text-sm space-y-2 my-4 text-center">
                  <li>TV Spot</li>
                  <li>Radio Spot</li>
                  <li>Running Text Spot News paper Spot</li>
                  <li>Web Banner Spot Public Transportation Spot</li>
                  <li>Radio Ad</li>
                  <li>Creative Content Media Sosial Maintenance</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow px-6 py-8">
              <div className="text-center">
                <div className="p-4 bg-pink-50 w-20 h-20 mb-4  flex items-center rounded-full text-center mx-auto border border-pink-400 border-2">
                  <CameraIcon className="w-14 text-pink-500 " />
                </div>
                <h3 className="items-center justify-center gap-1 font-bold mx-auto text-2xl">
                  <span className="text-gray-600">Print & Photography</span>
                </h3>
                <ul className="text-gray-700 text-sm space-y-2 my-4 text-center">
                  <li>Company or Brand Profile book</li>
                  <li>Logo Design</li>
                  <li>PrintAd</li>
                  <li>Flyer</li>
                  <li>Banner</li>
                  <li>Poster</li>
                  <li>Anodize plate Company Photo Photo product</li>
                </ul>
              </div>
            </div>
            {/* <div>Print & Photography</div> */}
          </div>
        <div className="w-full h-auto relative">
          <img className="absolute left-32 top-2" src="/images/ornament.png" alt="ornament" />
        </div>
        </div>
    </div>
);

export default OurServices;
