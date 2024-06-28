import * as React from 'react';

export default function CardVideo({ date = '', title = '', subtitle = '', src = '' }) {
  return (
    <div className='flex flex-col overflow-hidden rounded-lg'>
      <iframe className='h-60 w-full md:h-96' title={title} src={src}></iframe>

      <div className='flex grow flex-col gap-4 bg-white px-8 py-10'>
        <p className='text-tertiary'>{date}</p>
        <h2 className='text-2xl'>{title}</h2>
        <p className='font-semibold text-tertiary'>{subtitle}</p>
      </div>
    </div>
  );
}
