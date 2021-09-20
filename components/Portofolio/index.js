/* eslint-disable @next/next/no-img-element */
import { useState, Fragment } from 'react';
import { PlayIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';

const portofolioData = {
  videos: [
    "kZK8h-FlEUM",
    "F9qLbXYmY-Q",
    "00Xjt19k3X8",
    "yOhYjpfQcwQ",
    "5SQMtMFy2ao",
    "KqEB4xHk6Nk"
  ]
}

const Item = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div onClick={openModal} className="rounded-lg bg-white shadow relative cursor-pointer">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-pink-50 shadow w-12 h-12 mb-4 flex justify-center rounded-full text-center mx-auto ">
            <PlayIcon className="w-14 hover:text-gray-600 text-gray-900" />
          </div>
        </div>
        <img alt="video portofolio" className="rounded-lg object-fill" src={`http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`} />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed w-full inset-0 z-40 overflow-y-auto bg-gray-900 bg-opacity-90"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative max-w-4xl w-full h-full inline-block overflow-hidden align-middle transition-all transform shadow-xl">
                <iframe width="640" height="420" className="w-full " src={`https://www.youtube.com/embed/${videoId}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )

}

const Portofolio = () => (
  <div id="our-services" className="p-8 py-16 w-full relative bg-gray-800">
    <div className="container max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto mb-12 text-center space-y-2">
        <h2 className="text-3xl text-gray-100 font-bold  text-center">portofolio <span className="text-pink-500 font-bold">ccmedia</span></h2>
        <p className="md:text-lg text-sm text-gray-300">
          Berikut karya kreatif yang telah kami ciptakan:
        </p>
      </div>

      <div className="sm:grid-cols-1 md:grid-cols-3 grid gap-8 max-w-4xl mx-auto">  
        {portofolioData.videos.map(video => <Item videoId={video} key={video} />)}
      </div>

      <div className="w-full h-auto relative">
        <img className="absolute left-32 top-2" src="/images/ornament.png" alt="ornament" />
      </div>
    </div>
  </div>
);

export default Portofolio;
