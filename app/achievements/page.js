import React from 'react'

const page = () => {
  return (
    <div className='h-full bg-gradient-to-br from-[#1F1218] via-[#4A2635] to-[#8B3A50] text-white px-6 py-10 md:px-10 lg:px-20'>
      <div>
        <h2 className='flex justify-center items-center text-center text-3xl  font-semibold'>
          Achievements
        </h2>
      </div>
      <div className="mt-10 flex justify-end">
  <div className="w-full max-w-3xl rounded-lg bg-gray-800 p-6 shadow-lg">
    <h3 className="text-xl font-bold">
      Secured 2nd Place in First Byte Coding Competition
    </h3>

    <p className="mt-4 text-gray-300">
      Participated in a First Byte coding competition organized by CSE dept.
      OCT. Secured 2nd place among 100+ participants. Demonstrated strong
      problem-solving skills and efficient coding techniques.
    </p>
  </div>
</div>
    </div>
  )
}

export default page