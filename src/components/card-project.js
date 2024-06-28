import * as React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

export default function CardProject({ image = '', href = '', title = '', description = '', button = '' }) {
  return (
    <div className='group flex flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 ease-in-out hover:shadow-md'>
      <Link className='overflow-hidden' to={href}>
        <img
          className='h-[240px] w-full object-cover object-top transition-all duration-300 ease-in-out group-hover:scale-105 md:h-[324px]'
          src={image}
          alt='Project'
        />
      </Link>

      <div className='flex flex-col gap-3 px-8 py-10'>
        <Link className='text-2xl' to={href}>
          {title}
        </Link>

        <p className='text-secondary'>{description}</p>

        <Link className='mt-7 self-start text-primary' to={href}>
          {button}
        </Link>
      </div>
    </div>
  );
}
