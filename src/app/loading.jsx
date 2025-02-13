import React from 'react';

export default function Loading() {
  return (
    <main className='flex flex-col justify-center items-center h-screen bg-white'>
      <div className='flex flex-col items-center animate-pulse'>
        <h1 className='text-7xl font-extrabold mb-4'>LOADING...</h1>
        <p className='text-lg font-medium'>Crafting Your Perfect Bottle... 🚀 #BottleYourBrand</p>
      </div>
      <div className='mt-8 w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin'></div>
    </main>
  );
}