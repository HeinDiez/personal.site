"use client";

import dynamic from 'next/dynamic'
import {usePathname} from "next/navigation";
import Image from "next/image";

const MasterLayout = dynamic(()=> import("@/components/layout/master"))

export default function Home() {
  const pathname = usePathname()
  return (
      <MasterLayout path={pathname}>

          <div className='relative h-[calc(100dvh-128px)]'>
              <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[calc(100dvh-128px)]'>
                  <div className='flex flex-col h-full justify-end'>
                      <div className='mb-32 text-white'>
                          <h3 className='text-5xl font-light mb-4'>HELLO, I'M</h3>
                          <h1 className='text-9xl font-bold mb-10'>Hein Diez.</h1>
                          <p className='font-light'>
                              Senior Software Engineer
                          </p>
                      </div>
                  </div>
              </div>
              <div className='absolute top-0 -z-10 grid grid-cols-12 h-[calc(100dvh-128px)] w-full'>
                  <div className='relative col-span-9'>
                      <Image
                          priority
                          className='inset-0 absolute object-cover h-full w-full'
                          src='/images/4269bc3c75b06a43918f44c77e07d290.jpeg'
                          width={1000}
                          height={1000}
                          alt={'bg-image'}
                          objectFit={'cover'}/>
                  </div>
                  <div className='col-span-3 bg-primary text-white'>
                      <div className='flex flex-col items-center py-10 gap-12'>
                          <div>
                              <Image
                                  priority
                                  className="h-40 w-40 rounded-full"
                                  src='/images/4269bc3c75b06a43918f44c77e07d290.jpeg'
                                  width={100}
                                  height={100}
                                  alt={'profile-image'}
                                  objectFit={'cover'}/>
                          </div>
                          <div className='text-center flex-col flex gap-12 mb-8'>
                              <h4 className='text-3xl'>Hein Diez.</h4>
                              <div>
                                  <p>Software Engineer</p>
                                  <p>HD Software Solutions B.V.</p>
                                  <span>Hilversum, Netherlands</span>
                              </div>

                          </div>
                          <div className='text-center flex-col flex gap-6 mb-8'>
                              <div>
                                  <p>heindiez@gmail.com</p>
                                  <p>(+31)6 5335 9480</p>
                              </div>

                              <div>
                                  Social Media
                              </div>
                              <button className='py-3 px-5 rounded-lg bg-white text-black'>Get in touch</button>

                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </MasterLayout>
  );
}
