import React from 'react'

const Contacts = () => {
  return (
    <div>
       <div className=" mt-64 mb-10 text-5xl font-semibold p-6 pb-32 border-solid border-black border-b-2 md:text-7xl md:mt-72 md:pb-40 md:p-20">
       Our Contacts
       </div>
      <section className=" body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
         
            <p className="lg:w-2/3 mx-auto leading-relaxed text-5xl">
            Leave us a message
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7  text-sm text-gray-600">
                   Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full  rounded border border-gray-300 focus:border-teal-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                   Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full  rounded border border-gray-300 focus:border-teal-500  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                   Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full  rounded border border-gray-300 focus:border-teal-500  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-black  border-0 py-2 px-8 focus:outline-none hover:bg-teal-500  rounded text-lg">
                  Send Message
                </button>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts
