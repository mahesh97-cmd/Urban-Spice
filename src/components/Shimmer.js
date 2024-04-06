import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full max-w-2xl p-4">
        <div className="flex items-center justify-between rounded-md p-4">
          <div>
            <div className="bg-gray-200 h-8 w-40 mb-2 animate-pulse"></div>
            <div className="bg-gray-200 h-6 w-64 mb-2 animate-pulse"></div>
            <div className="bg-gray-200 h-6 w-96 animate-pulse"></div>
          </div>
          <div className="bg-gray-200 rounded-md p-4">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-green-400 h-6 w-6 mr-2 rounded-full animate-pulse"></div>
              <div className="bg-gray-200 h-6 w-20 animate-pulse"></div>
            </div>
            <div className="bg-gray-200 h-6 w-24 animate-pulse"></div>
          </div>
        </div>

        <div className="border-b border-gray-300 border-dashed my-4"></div>

        <div className="mx-4">
          <div className="bg-gray-200 h-6 w-40 mb-2 animate-pulse"></div>
          <div className="bg-gray-200 h-6 w-64 animate-pulse"></div>
        </div>

        <div className="p-4">
          <div className="flex justify-between mb-4">
            <div className="bg-gray-200 h-8 w-24 animate-pulse"></div>
            <div className="bg-gray-200 h-8 w-24 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 h-40 w-full rounded-md animate-pulse"></div>
            <div className="bg-gray-200 h-40 w-full rounded-md animate-pulse"></div>
            {/* Add more placeholders as needed */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shimmer;
