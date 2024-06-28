import * as React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

const styles = {
  primary: 'bg-primary text-white border-2 border-primary',
  'primary-outlined': 'border-2 border-primary text-primary',
  secondary: 'bg-secondary text-white border-2 border-secondary',
  tertiary: 'bg-white',
};

export default function Button({ children, className, external = false, type, href }) {
  return (
    <div
      className={`${styles[type]} size-fit whitespace-nowrap rounded-lg text-center hover:shadow-button ${className}`}
    >
      {external && (
        <a className='block px-6 py-4' href={href} target='_blank' rel='noreferrer'>
          {children}
        </a>
      )}

      {!external && (
        <Link className='block px-6 py-4' to={href}>
          {children}
        </Link>
      )}
    </div>
  );
}
