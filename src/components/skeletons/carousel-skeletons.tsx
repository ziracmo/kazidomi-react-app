import React from 'react';

const CarouselSkeletons = () => {
  return (
    <div className="grid gap-4 grid-cols-12 px-14 pt-8 pb-10">
      <div className="col-span-12 md:col-span-4 aligner">
        <div className="h-52 w-full rounded-xl bg-gray-300 animate-pulse"></div>
      </div>
      <div className="col-span-12 md:col-span-8">
        <div className="h-8 rounded-xl bg-gray-300 animate-pulse"></div>
        <div className="h-4 w-28 rounded-xl mt-2 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
};

export default CarouselSkeletons;
