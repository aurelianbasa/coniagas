import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';

import BatteriesImage from '@media/investors/batteries.png';
import FundamentalImage from '@media/investors/fundamental.png';

import agmProxyPDF from '@media/investors/proxy.pdf';
import agmNoticePDF from '@media/investors/notice.pdf';
import agmCircularPDF from '@media/investors/circular.pdf';
import FundamentalPDF from '@media/investors/fundamental.pdf';
import PresentationPDF from '@media/investors/presentation.pdf';
import TechnicalReportPDF from '@media/investors/technical-report.pdf';
import Financial2024Q1PDF from '@media/investors/financial-2024-q1.pdf';
import Management2024Q1PDF from '@media/investors/management-2024-q1.pdf';
import Financial2024Q2PDF from '@media/investors/financial-2024-q2.pdf';
import Management2024Q2PDF from '@media/investors/management-2024-q2.pdf';
import Financial2024Q3PDF from '@media/investors/financial-2024-q3.pdf';
import Management2024Q3PDF from '@media/investors/management-2024-q3.pdf';

export default function Investors() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className='pt-44'>
        <div id='stockInformation' className='container mx-auto px-5 pb-20 text-center md:px-10'>
          <p className='text-tertiary'>{t('stockSubtitle')}</p>
          <h1 className='my-4 text-4xl-mobile text-secondary md:text-4xl'>{t('stockTitle')}</h1>
          <p>{t('stockDescription')}</p>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <iframe
              className='mt-16 h-[450px] w-full'
              title='CONIAGAS BATTERY METALS INC'
              src='https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22TSXV%3ACOS%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A400%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22coniagas.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22coniagas.com%2Finvestors%22%7D'
            ></iframe>
          </motion.div>
        </div>

        <div className='bg-tertiary/10 py-20'>
          <div id='capitalStructure' className='container mx-auto px-5 text-center md:px-10'>
            <p className='text-primary'>{t('capitalSubtitle')}</p>
            <h2 className='mb-16 mt-4 text-4xl-mobile text-secondary md:text-4xl'>{t('capitalTitle')}</h2>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                initial={{ x: '80px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                className='rounded-lg bg-white p-10 text-center'
              >
                <p className='mb-2 text-3xl text-primary'>{t('capitalStats1Value')}</p>
                <p className='text-tertiary'>{t('capitalStats1')}</p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                initial={{ x: '80px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                className='rounded-lg bg-white p-10 text-center'
              >
                <p className='mb-2 text-3xl text-primary'>{t('capitalStats2Value')}</p>
                <p className='text-tertiary'>{t('capitalStats2')}</p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                initial={{ x: '80px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                className='rounded-lg bg-white p-10 text-center'
              >
                <p className='mb-2 text-3xl text-primary'>{t('capitalStats3Value')}</p>
                <p className='text-tertiary'>{t('capitalStats3')}</p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                initial={{ x: '80px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                className='rounded-lg bg-white p-10 text-center'
              >
                <p className='mb-2 text-3xl text-primary'>{t('capitalStats4Value')}</p>
                <p className='text-tertiary'>{t('capitalStats4')}</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div id='financials' className='container mx-auto grid gap-6 px-5 py-20 md:px-10 xl:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-2xl bg-white p-5 pb-16 md:p-10'
          >
            <p className='text-tertiary'>{t('financialSubtitle')}</p>
            <Trans
              parent='h2'
              i18nKey='financialTitle'
              className='mb-6 mt-4 text-4xl-mobile text-secondary md:text-4xl'
            ></Trans>

            <div>
              <div className='flex items-center justify-between border-b-2 border-tertiary py-10 md:px-6'>
                <p className='text-3xl text-secondary'>{t('financial2024')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg bg-primary px-6 py-4 text-white hover:shadow-button'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2024Q1PDF}
                  >
                    {t('financial2024Q1')}
                  </a>
                  <a
                    className='rounded-lg bg-primary px-6 py-4 text-white hover:shadow-button'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2024Q2PDF}
                  >
                    {t('financial2024Q2')}
                  </a>
                  <a
                    className='rounded-lg bg-primary px-6 py-4 text-white hover:shadow-button'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2024Q3PDF}
                  >
                    {t('financial2024Q3')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-2xl bg-white p-5 pb-16 md:p-10'
          >
            <p className='text-tertiary'>{t('managementSubtitle')}</p>
            <h2 className='mb-6 mt-4 text-4xl-mobile text-secondary md:text-4xl'>{t('managementTitle')}</h2>

            <div>
              <div className='flex items-center justify-between border-b-2 border-tertiary py-10 md:px-6'>
                <p className='text-3xl text-secondary'>{t('management2024')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg bg-primary px-6 py-4 text-white hover:shadow-button'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2024Q1PDF}
                  >
                    {t('management2024Q1')}
                  </a>
                  <a
                    className='rounded-lg bg-primary px-6 py-4 text-white hover:shadow-button'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2024Q2PDF} 
                  >
                  {t('management2024Q2')} 
                 </a>
                 <a
                    className='rounded-lg bg-primary px-6 py-4 text-white hover:shadow-button'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2024Q3PDF} 
                  >
                  {t('management2024Q3')} 
                 </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          id='files'
          style={{ '--bg-image-url': `url(${BatteriesImage})` }}
          className={`bg-[image:var(--bg-image-url)] bg-cover bg-center py-20`}
        >
          <div className='container mx-auto grid gap-16 px-5 md:grid-cols-2 md:px-10'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '-80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center justify-between rounded-2xl bg-white p-5 md:p-10'
            >
              <p className='text-2xl text-primary'>{t('presentation')}</p>

              <Button external type='primary-outlined' href={PresentationPDF}>
                {t('presentationButton')}
              </Button>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center justify-between rounded-2xl bg-primary p-5 md:p-10'
            >
              <p className='text-2xl text-white'>{t('technicalReport')}</p>

              <Button external type='tertiary' href={TechnicalReportPDF}>
                {t('technicalReportButton')}
              </Button>
            </motion.div>
          </div>
        </div>

        <div id='AGM' className='container mx-auto px-5 py-20 md:px-10'>
          <h2 className='mb-16 text-center text-4xl-mobile text-secondary md:text-4xl'>{t('agmTitle')}</h2>

          <div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center justify-between rounded-2xl bg-primary p-5 md:p-10'
            >
              <div>
                <p className='mb-2 uppercase text-tertiary'>{t('agmNoticeDate')}</p>
                <p className='text-2xl text-white'>{t('agmNotice')}</p>
              </div>

              <Button external type='tertiary' href={agmNoticePDF}>
                {t('agmNoticeButton')}
              </Button>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center justify-between rounded-2xl bg-primary p-5 md:p-10'
            >
              <div>
                <p className='mb-2 uppercase text-tertiary'>{t('agmProxyFormDate')}</p>
                <p className='text-2xl text-white'>{t('agmProxyForm')}</p>
              </div>

              <Button external type='tertiary' href={agmProxyPDF}>
                {t('agmProxyFormButton')}
              </Button>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center justify-between rounded-2xl bg-primary p-5 md:p-10'
            >
              <div>
                <p className='mb-2 uppercase text-tertiary'>{t('agmManagementDate')}</p>
                <p className='text-2xl text-white'>{t('agmManagement')}</p>
              </div>

              <Button external type='tertiary' href={agmCircularPDF}>
                {t('agmManagementButton')}
              </Button>
            </motion.div>
          </div>
        </div>

        <div id='coniagasFMV' className='container mx-auto px-5 py-10 md:px-10'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='rounded-2xl bg-secondary p-5 text-white md:p-10'
          >
            <p>{t('fmvSubtitle')}</p>
            <h3 className='mb-6 mt-4 text-3xl'>{t('fmvTitle')}</h3>
            <p>{t('fmvDescription')}</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Investors | Coniagas Battery Metals</title>
      <meta name='description' content='Coniagas Battery Metals. Find all of our relevant data.' />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "investors"] }, language: { eq: $language } }) {
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
