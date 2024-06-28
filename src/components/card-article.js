import * as React from 'react';

export default function CardArticle({ image = '', date = '', subtitle = '', title = '', button = '', href = '' }) {
  return (
    <div className='group flex flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 ease-in-out hover:shadow-md'>
      <a className='overflow-hidden' href={href}>
        <img
          className='h-[240px] w-full object-cover object-top transition-all duration-300 ease-in-out group-hover:scale-105 md:h-[324px]'
          src={image}
          alt='Article'
        />
      </a>

      <div className='flex flex-col gap-3 px-8 py-10'>
        <p className='text-tertiary'>{date}</p>
        <p className='font-semibold text-secondary'>{subtitle}</p>

        <a className='text-2xl' href={href}>
          {title}
        </a>

        <a className='mt-7 self-start text-primary' href={href} target='_blank' rel='noreferrer'>
          {button}
        </a>
      </div>
    </div>
  );
}
