/* eslint-disable @next/next/no-img-element */

import { ClipboardListIcon } from "@heroicons/react/outline";

const client = {
  list: [
    "apical.jpg",
    "BPJS Ketenagakerjaan.jpg",
    "Bright Gas.jpg",
    "ECOLAB.jpg",
    "FIF.jpg",
    "GAIKINDO.jpg",
    "Honda.jpg",
    "IMS.jpg",
    "IMOO.jpg",
    "mandiri.jpg",
    "Marina.jpg",
    "Ritz Carlton.jpg",
    "scoliosis.jpg",
    "XL Axiata.jpg"
  ]
}

const Item = ({ imageUrl }) => {
  return (
    <div>
      <img alt="client" className="rounded-lg object-fill" src={`/images/client/${imageUrl}`} />
    </div>
  )

}

const OurClient = () => (
  <div id="our-services" className="p-8 py-16 w-full relative bg-white">
    <div className="container max-w-8xl mx-auto">
      <div className="max-w-4xl mx-auto mb-12 text-center space-y-2">
        <h2 className="text-3xl text-gray-800 font-bold  text-center">client <span className="text-pink-500 font-bold">ccmedia</span></h2>
        <p className="md:text-lg text-sm text-gray-600">
        Client yang telah mempercayakan kepada kami:
        </p>
      </div>

      <div className="grid-cols-2 md:grid-cols-5 grid gap-8 max-w-4xl mx-auto">  
        {client.list.map(image => <Item imageUrl={image} key={image} />)}
      </div>

      <div className="w-full h-auto relative">
        <img className="absolute left-32 top-2" src="/images/ornament.png" alt="ornament" />
      </div>
    </div>
  </div>
);

export default OurClient;
