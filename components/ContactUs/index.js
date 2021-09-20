import { LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Form = () => {
    const [name, setName] = useState('');
    const [messages, setMessages] = useState('');

    const handleClickSubmit = () => {
        window.location.assign(`https://wa.me/+6285274793033?text=Hi ccmedia, ${name ? `saya ${name}` : ''}, ${messages}`);
    }

    return (
        // <form>
            <div className="overflow-hidden">
            <div className="px-4 py-5 bg-gray-800 sm:p-6">
                <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-100">
                         Nama Lengkap
                        </label>
                        <input
                        placeholder="Jhon Doe"
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="given-name"
                        className="mt-1 py-2 px-2 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
    
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-100">
                         Pesan
                        </label>
                        <input
                        placeholder="Masukan pesan di sini"
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="given-messages"
                        className="mt-1 py-2 px-2 mt-2 h-auto min-h-32 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 bg-gray-800 text-right sm:px-6" onClick={handleClickSubmit}>
                <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                Kirim
                </button>
            </div>
            </div>
        // </form>
    )
}

const ContanctUs = () => (
  <div id="about" className="p-8 py-16 w-full relative bg-gray-800">
        <div className="container max-w-4xl mx-auto">
            {/* <div className="row"> */}
                <div className="text-gray-300 pb-8">
                    <h2 className="text-3xl text-gray-100 font-bold mb-8 text-center">hubungi kami <span className="text-pink-500 font-bold">sekarang</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Form />
                        <div>
                            <div>
                                <div className="flex gap-2 jsutify-start">
                                    <PhoneIcon className="w-6 md:w-8 text-gray-100" />
                                    <span className="my-4 text-xs md:text-sm">
                                        +62 8527 4793033
                                    </span>
                                </div>
                                <div className="flex gap-2 jsutify-start">
                                    <LocationMarkerIcon className="w-9 text-gray-100" />
                                    <span className="my-4 text-xs md:text-sm">
                                        Paradise Serpong City, Adventure Balmoral Blok J20/55, Tangerang Selatan
                                    </span>
                                </div>
                                <div className="flex gap-2 jsutify-start">
                                    <MailIcon className="w-6 md:w-8 text-gray-100" />
                                    <span className="my-4 text-xs md:text-sm">
                                        ccmedia5520@gmail.com
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>Follow Us:</div>
                                <a href="https://instagram.com/ccmedia.id" className="cursor-pointer hover:text-white flex items-center gap-1">
                                    <FaInstagram className="text-xl"/>
                                    <span className="text-sm">@ccmedia.id</span>
                                </a>
                                <a href="https://www.youtube.com/channel/UCCp9smeI_3nknV5vA11C3nw" className="cursor-pointer hover:text-white flex items-center gap-1">
                                    <FaYoutube className="text-xl"/>
                                    <span className="text-sm">CC Media</span>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    </div>
);

export default ContanctUs;
