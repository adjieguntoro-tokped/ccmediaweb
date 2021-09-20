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
    "XL Axiata.jpg",
    "Lion Bouquet.jpg"
  ],
  testimonies: [
    {
      title: 'Creative',
      content: 'Developing the insight is at the heart of every great experience. By knowing people’s behaviors, needs and desires we can explore, design and build around them.'
    },
    {
      title: 'Responsible',
      content: 'With a global team of marketing, we are responsible in detail to bring your story to life with compelling, until the work project done.'
    },
    {
      title: 'Jokes',
      content: 'Jokes as become our core creative on developing the stories, content and other video material in details. Freedom oh thinking in our chemistry.'
    },
    {
      title: 'Magic',
      content: 'Our magic skill combine a keen business sense with knowledge of emerging technologies, which is why every company needs new perspectives to be successful.'
    },
    {
      title: 'Friendly',
      content: 'We are a friend to create meaningful & memorable experiences online that trigger real-life actions with no worries, meals and drinks are served.'
    },
    {
      title: 'Flexible',
      content: 'We are able adjusting the concept story and creative treatment based on client request in terms of budget, timeline, and any other needs.'
    }
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

      <div className="grid-cols-3 md:grid-cols-5 grid gap-8 max-w-4xl mx-auto">  
        {client.list.map(image => <Item imageUrl={image} key={image} />)}
      </div>

      <div className="w-full h-auto relative">
        <img className="absolute left-32 top-2" src="/images/ornament.png" alt="ornament" />
      </div>
    </div>
    <div className="container max-w-8xl mx-auto mt-14">
      <div className="max-w-4xl mx-auto mb-12 text-center space-y-2 py-8">
        <h2 className="text-3xl text-pink-600 font-bold  text-center">testimoni</h2>
        <p className="md:text-lg text-sm text-gray-600">
        Apa kata mereka:
        </p>
      </div>

      <div className="grid-cols-1 md:grid-cols-3 grid gap-8 md:gap-12 max-w-4xl mx-auto pb-12">  
        {client.testimonies.map(item => (
          <div key={item.title} className="text-center shadow p-4 rounded-3xl">
            <div className="font-bold text-gray-800 uppercase">
              {item.title}
            </div>
            <div className="mt-3 text-sm text-gray-600 leading-tight">{item.content}</div>
          </div>
        ))}
      </div>

      <div className="w-full h-auto relative">
        <img className="absolute left-32 top-2" src="/images/ornament.png" alt="ornament" />
      </div>
    </div>
  </div>
);

export default OurClient;
