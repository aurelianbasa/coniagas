import * as React from 'react';
import { format } from 'date-fns';
import { RiTimeLine } from 'react-icons/ri';
import { enCA, frCA } from 'date-fns/locale';
import { Link } from 'gatsby-plugin-react-i18next';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { getReadingTime, getShortTitle } from '@utils/index';

export default function CardNews({ title = '', publishDate = '', image = '', href = '', content = {} }) {
  const { t, i18n } = useTranslation();

  const dateLocale = {
    en: enCA,
    fr: frCA,
  };

  return (
    <div className='group flex flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 ease-in-out hover:shadow-md'>
      <Link className='overflow-hidden' to={href}>
        <img
          className='h-[240px] w-full object-cover object-top transition-all duration-300 ease-in-out group-hover:scale-105 md:h-[324px]'
          src={image}
          alt={title}
        />
      </Link>

      <div className='flex flex-col gap-4 px-8 py-10'>
        <div className='flex justify-between text-tertiary'>
          <span className='uppercase'>
            {format(publishDate, 'LLLL d, yyyy', { locale: dateLocale[i18n.language] })}
          </span>

          <div className='flex items-center gap-2'>
            <RiTimeLine />
            {getReadingTime(content.raw)} {t('cardNewsMinRead')}
          </div>
        </div>

        <Link className='mb-6 text-2xl' to={href}>
          {getShortTitle(title, 60)}
        </Link>

        <Link to={href} className='self-start text-primary'>
          {t('cardNewsButton')}
        </Link>
      </div>
    </div>
  );
}
