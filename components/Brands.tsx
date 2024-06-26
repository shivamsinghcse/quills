import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import img1 from '@/public/quill pen photo  (1).png'

export function Brands() {
    return (<>
    <h2 className='text-center text-4xl font-bold my-12'>Our Brands</h2>
        <div className='flex flex-wrap gap-10 items-center justify-center my-14'>

            {/* <div className="w-[300px] rounded-md border">
                <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        Feather
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #EcoPens
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Quills
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Feather
                        </span>
                    </div>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black dark:bg-white px-2 py-1.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-black/80 hover:dark:bg-white/80 hover:dark:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button>
                </div>
            </div>
            <div className="w-[300px] rounded-md border">
                <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        Cursive
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Ecopens
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Quills
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Cursive
                        </span>
                    </div>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black dark:bg-white px-2 py-1.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-black/80 hover:dark:bg-white/80 hover:dark:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button>
                </div>
            </div> */}
            {/* <div className="w-[300px] rounded-md border">
                <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        Earthwise
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Earthwise
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Ecopens
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Quills
                        </span>
                    </div>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black dark:bg-white px-2 py-1.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-black/80 hover:dark:bg-white/80 hover:dark:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button>
                </div>
            </div> */}
            <div className="w-[300px] rounded-md border">
                <Image
                    src={img1}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        Quills
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                    WORD THAT FLOW
                    WITH A PEN THAT GROW
                    </p>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #QuillsStroke
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Ecopens
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Quills
                        </span>
                    </div>
                    {/* <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black dark:bg-white px-2 py-1.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-black/80 hover:dark:bg-white/80 hover:dark:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button> */}
                </div>
            </div>
        </div>
    </>
    )
}
