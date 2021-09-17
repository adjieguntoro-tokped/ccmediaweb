/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
// import {
//   useScrollSection,
// } from 'react-scroll-section';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

const navigation = [
  { name: 'Tentang Kami', href: '#', current: false, alias: 'about' },
  { name: 'Layanan', href: '#', current: false, alias: 'services' },
  { name: 'Portofolio', href: '#', current: false, alias: 'portofolio' },
  { name: 'Hubungi Kami', href: '#', current: false, alias: 'contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const aboutSection = {onClick: () => {}};

  return (
    <Disclosure as="nav" className="bg-gray-900 fixed z-40 w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch justify-start md:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/ccmedia-logo-white.png"
                    alt="ccmedia"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto filter brightness-200 "
                    src="/ccmedia-logo-white.png"
                    alt="Ccmedia"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.alias} smooth duration={500} offset={-50} spy
                        key={item.name}
                        href={item.href}
                        activeClass="border-b-2 border-white text-white"
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-white hover:text-gray-300',
                          'px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={aboutSection.onClick}
                      >
                          {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                to={item.alias} smooth duration={500} offset={-50} spy
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={aboutSection.onClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
