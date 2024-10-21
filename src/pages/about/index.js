import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';

import MetalsImage from '@media/about/metals.png';
import Member1Image from '@media/about/member-1.png';
import Member2Image from '@media/about/member-2.webp';
import Member3Image from '@media/about/member-3.webp';
import Member4Image from '@media/about/member-4.webp';
import Member5Image from '@media/about/member-5.webp';
import OverviewImage from '@media/about/overview.png';
import ConiagasImage from '@media/about/coniagas.webp';

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div
        style={{ '--bg-image-url': `url(${OverviewImage})` }}
        className={`flex min-h-screen items-center bg-[image:var(--bg-image-url)] bg-cover bg-center pb-20 pt-44`}
      >
        <div className='container mx-auto items-center px-5 md:px-10'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
          >
            <div className='flex flex-col gap-4'>
              <Trans parent='h1' i18nKey='overviewTitle' className='text-4xl-mobile text-secondary md:text-4xl'></Trans>
              <Trans i18nKey='overview'></Trans>

              <div>
                <img className='mt-6 rounded-lg object-cover' src={ConiagasImage} alt='Coniagas' />
              </div>
            </div>

            <div>
              <img className='rounded-lg object-cover' src={MetalsImage} alt='Elements' />
            </div>
          </motion.div>
        </div>
      </div>

      <div className='bg-tertiary/10 py-20'>
        <div className='container mx-auto grid gap-10 px-5 md:px-10'>
          <Trans parent='h2' i18nKey='membersTitle' className='text-4xl-mobile text-secondary md:text-4xl'></Trans>

          <div className='grid gap-20'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              className='grid gap-10 md:grid-cols-3-9 lg:gap-16'
            >
              <div className='max-w-xs md:max-w-full'>
                <img className='w-full rounded-lg' src={Member1Image} alt='Member'></img>
              </div>

              <div className='flex flex-col gap-3 self-center'>
                <h3 className='text-3xl'>{t('member1Name')}</h3>
                <p className='mb-3 text-primary'>{t('member1Role')}</p>
                <p>{t('member1Bio')}</p>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              className='grid gap-10 md:grid-cols-3-9 lg:gap-16'
            >
              <div className='max-w-xs md:max-w-full'>
                <img className='w-full rounded-lg' src={Member2Image} alt='Member'></img>
              </div>

              <div className='flex flex-col gap-3 self-center'>
                <h3 className='text-3xl'>{t('member2Name')}</h3>
                <p className='mb-3 text-primary'>{t('member2Role')}</p>
                <p>{t('member2Bio')}</p>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              className='grid gap-10 md:grid-cols-3-9 lg:gap-16'
            >
              <div className='max-w-xs md:max-w-full'>
                <img className='w-full rounded-lg' src={Member3Image} alt='Member'></img>
              </div>

              <div className='flex flex-col gap-3 self-center'>
                <h3 className='text-3xl'>{t('member3Name')}</h3>
                <p className='mb-3 text-primary'>{t('member3Role')}</p>
                <p>{t('member3Bio')}</p>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              className='grid gap-10 md:grid-cols-3-9 lg:gap-16'
            >
              <div className='max-w-xs md:max-w-full'>
                <img className='w-full rounded-lg' src={Member4Image} alt='Member'></img>
              </div>

              <div className='flex flex-col gap-3 self-center'>
                <h3 className='text-3xl'>{t('member4Name')}</h3>
                <p className='mb-3 text-primary'>{t('member4Role')}</p>
                <p>{t('member4Bio')}</p>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              className='grid gap-10 md:grid-cols-3-9 lg:gap-16'
            >
              <div className='max-w-xs md:max-w-full'>
                <img className='w-full rounded-lg' src={Member5Image} alt='Member'></img>
              </div>

              <div className='flex flex-col gap-3 self-center'>
                <h3 className='text-3xl'>{t('member5Name')}</h3>
                <p className='mb-3 text-primary'>{t('member5Role')}</p>
                <p>{t('member5Bio')}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>About | Coniagas Battery Metals</title>
      <meta
        name='description'
        content='The name Coniagas spells out the key products according to symbols of periodic table: Cobalt, Nickel, Silver, and Arsenic.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "about"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
