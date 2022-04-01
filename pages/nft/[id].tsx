import React from 'react';

const NFTDropPage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="p-2 rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600">
            <img
              className="object-cover w-44 rounded-xl lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>

          <div className='p-5 space-y-6 text-center'>
            <h1 className="text-4xl text-white text-bold">PAPAFAM Apps</h1>
            <h2 className="text-xl text-gray-300">
              A collection of PAPAFAM Apes who live & breathe React!
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div></div>
    </div>
  )
}

export default NFTDropPage
