import * as React from 'react';
import { graphql } from 'gatsby';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import ShowMoreText from 'react-show-more-text';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';
import DataWrapper from '@components/data-wrapper';

import CMImage from '@media/critical-materials/cmi.png';
import USAImage from '@media/critical-materials/usa.webp';
import CopperImage from '@media/critical-materials/copper.png';
import NickelImage from '@media/critical-materials/nickel.png';
import CobaltImage from '@media/critical-materials/cobalt.png';
import QuebecImage from '@media/critical-materials/quebec.webp';
import CanadaImage from '@media/critical-materials/canada.webp';
import OverviewImage from '@media/critical-materials/overview.png';

import DoePDF from '@media/critical-materials/doe-critical-material-assessment.pdf';
import PLResumePDF from '@media/critical-materials/PL_resume_critical_strategic_minerals.pdf';

export default function CriticalMaterials() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div
        style={{ '--bg-image-url': `url(${OverviewImage})` }}
        className={`flex min-h-screen items-center bg-[image:var(--bg-image-url)] bg-cover bg-center pt-24`}
      >
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='container mx-auto px-5 py-28 md:gap-10 md:px-10'
        >
          <p className='text-tertiary'>{t('heroSubtitle')}</p>
          <Trans parent='h1' i18nKey='heroTitle' className='mb-10 mt-4 text-6xl-mobile text-white md:text-6xl'></Trans>
        </motion.div>
      </div>

      <div className='container mx-auto px-5 py-20 md:px-10'>
        <Trans
          parent='h2'
          i18nKey='chartsTitle'
          className='text-center text-4xl-mobile text-secondary md:text-4xl'
        ></Trans>
        <p className='mt-6 text-center text-tertiary'>{t('chartsDescription')}</p>

        <div className='grid gap-6 py-10 lg:grid-cols-2'>
          <div className='grid gap-10 rounded-2xl p-5 md:p-10'>
            <h3 className='text-3xl text-tertiary'>{t('legend1')}</h3>

            <div className='relative h-80'>
              <div className='absolute left-[7%] top-[14%] md:left-[24%] md:top-[14%]'>
                <CountUp
                  className='text-3xl text-blue'
                  end='30'
                  suffix='%'
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                <p>{t('chart1Item1')}</p>
              </div>

              <div className='absolute left-[80%] top-[60%] md:left-[74%] md:top-[60%]'>
                <CountUp
                  className='text-3xl text-primary'
                  end='28'
                  suffix='%'
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                <p>{t('chart1Item2')}</p>
              </div>

              <div className='absolute left-[7%] top-[69%] md:left-[18%] md:top-[69%]'>
                <CountUp
                  className='text-3xl text-green'
                  end='19'
                  suffix='%'
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                <p>{t('chart1Item3')}</p>
              </div>

              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 150 }}
                className='absolute left-[45%] top-[20%] size-[80px] rounded-full bg-blue md:left-[45%] md:top-[20%]'
              ></motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 150 }}
                className='absolute left-[48%] top-[53%] size-[76px] rounded-full bg-primary md:left-1/2 md:top-[53%]'
              ></motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 150 }}
                className='absolute left-[24%] top-[54%] size-[52px] rounded-full bg-green md:left-[36%] md:top-[54%]'
              ></motion.div>
            </div>
          </div>

          <div className='grid gap-10 rounded-2xl bg-white p-5 md:p-10'>
            <h3 className='text-3xl'>{t('legend2')}</h3>

            <div className='relative h-[480px] md:h-80'>
              <div className='absolute left-[61%] top-[74%] md:left-[65%] md:top-[65%]'>
                <CountUp
                  className='text-4xl-mobile text-blue md:text-4xl'
                  end='90'
                  suffix='%'
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                <p>{t('chart2Item1')}</p>
              </div>

              <div className='absolute left-[64%] top-[8%] md:left-[8%] md:top-[51%]'>
                <CountUp
                  className='text-4xl-mobile text-primary md:text-4xl'
                  end='96'
                  suffix='%'
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                <p>{t('chart2Item2')}</p>
              </div>

              <div className='absolute left-[8%] top-[41%] md:left-[80%] md:top-[7%]'>
                <CountUp
                  className='text-4xl-mobile text-green md:text-4xl'
                  end='88'
                  suffix='%'
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                <p>{t('chart2Item3')}</p>
              </div>

              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.2, type: 'spring', stiffness: 150 }}
                className='absolute left-[7%] top-[67%] size-[144px] rounded-full bg-blue md:left-[33%] md:top-[45%]'
              ></motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.2, type: 'spring', stiffness: 150 }}
                className='absolute left-[4%] top-0 size-[154px] rounded-full bg-primary md:left-[20%] md:top-[-3%]'
              ></motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.2, type: 'spring', stiffness: 150 }}
                className='absolute left-1/2 top-[35%] size-[140px] rounded-full bg-green md:left-1/2 md:top-[9%]'
              ></motion.div>
            </div>
          </div>
        </div>

        <p className='text-right text-sm text-tertiary'>{t('chartSource')}</p>
      </div>

      <div className='mb-20 bg-tertiary py-20'>
        <div className='container mx-auto grid gap-6 px-5 md:px-10'>
          <Trans parent='h2' i18nKey='metalsTitle' className='text-4xl-mobile text-secondary md:text-4xl'></Trans>
          <p>{t('metalsSubtitle')}</p>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='relative mt-40 grid gap-10 rounded-2xl bg-white px-6 pb-10 pt-24'
            >
              <img className='absolute -top-40 left-1/2 h-64 -translate-x-1/2' src={CopperImage} alt='Copper' />
              <h3 className='text-center text-3xl text-secondary'>{t('metalsItem1Title')}</h3>

              <div className='flex gap-6'>
                <div className='py-4'>
                  <p className='text-tertiary'>{t('metalsItem1Current')}</p>
                  <p className='mt-2 text-2xl'>{t('metalsItem1CurrentValue')}</p>
                </div>
                <div className='grow rounded-lg bg-primary p-4'>
                  <p className='text-white/50'>{t('metalsItem1Expected')}</p>
                  <p className='mt-2 text-2xl text-white'>{t('metalsItem1ExpectedValue')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='relative mt-40 grid gap-10 rounded-2xl bg-white px-6 pb-10 pt-24'
            >
              <img className='absolute -top-40 left-1/2 h-64 -translate-x-1/2' src={NickelImage} alt='Nickel' />
              <h3 className='text-center text-3xl text-secondary'>{t('metalsItem2Title')}</h3>

              <div className='flex gap-6'>
                <div className='py-4'>
                  <p className='text-tertiary'>{t('metalsItem2Current')}</p>
                  <p className='mt-2 text-2xl'>{t('metalsItem2CurrentValue')}</p>
                </div>
                <div className='grow rounded-lg bg-primary p-4'>
                  <p className='text-white/50'>{t('metalsItem2Expected')}</p>
                  <p className='mt-2 text-2xl text-white'>{t('metalsItem2ExpectedValue')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='relative mt-40 grid gap-10 rounded-2xl bg-white px-6 pb-10 pt-24'
            >
              <img className='absolute -top-40 left-1/2 h-64 -translate-x-1/2' src={CobaltImage} alt='Cobalt' />
              <h3 className='text-center text-3xl text-secondary'>{t('metalsItem3Title')}</h3>

              <div className='flex gap-6'>
                <div className='py-4'>
                  <p className='text-tertiary'>{t('metalsItem3Current')}</p>
                  <p className='mt-2 text-2xl'>{t('metalsItem3CurrentValue')}</p>
                </div>
                <div className='grow rounded-lg bg-primary p-4'>
                  <p className='text-white/50'>{t('metalsItem3Expected')}</p>
                  <p className='mt-2 text-2xl text-white'>{t('metalsItem3ExpectedValue')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-5 pb-10 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-4 rounded-2xl bg-white p-5 md:p-10'
        >
          <div className='flex gap-10'>
            <p className='text-primary'>{t('usaSubtitle')}</p>
            <p className='text-tertiary'>{t('usaDate')}</p>
          </div>

          <Trans parent='h2' i18nKey='usaTitle' className='text-4xl-mobile text-secondary md:text-4xl'></Trans>

          <div className='mt-6 grid gap-16 xl:grid-cols-2'>
            <div className='flex items-center justify-center overflow-hidden rounded-lg'>
              <img className='w-full' src={USAImage} alt='Report' />
            </div>

            <div className='flex flex-col gap-4'>
              <Trans i18nKey='usaDescription'></Trans>

              <p className='mt-2 text-sm text-tertiary'>{t('usaNote')}</p>

              <Button className='mt-6 w-full self-end md:w-fit' external type='primary-outlined' href={DoePDF}>
                {t('usaButton')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className='container mx-auto px-5 pb-10 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-4 rounded-2xl bg-white p-5 md:p-10'
        >
          <div className='flex gap-10'>
            <p className='text-primary'>{t('canadaSubtitle')}</p>
            <p className='text-tertiary'>{t('canadaDate')}</p>
          </div>

          <Trans parent='h2' i18nKey='canadaTitle' className='text-4xl-mobile text-secondary md:text-4xl'></Trans>

          <div className='mt-6 grid gap-16 xl:grid-cols-2'>
            <div className='flex items-center justify-center overflow-hidden rounded-lg'>
              <img className='w-full' src={CanadaImage} alt='Canada' />
            </div>

            <div className='flex flex-col gap-4'>
              <Trans i18nKey='canadaDescription'></Trans>

              <p className='mt-2 text-sm text-tertiary'>{t('canadaNote')}</p>

              <Button
                className='mt-6 w-full self-end md:w-fit'
                external
                type='primary-outlined'
                href='https://www.canada.ca/en/natural-resources-canada/news/2024/06/government-of-canada-releases-updated-critical-minerals-list.html'
              >
                {t('canadaButton')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className='container mx-auto px-5 pb-20 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-4 rounded-2xl bg-white p-5 md:p-10'
        >
          <div className='flex gap-10'>
            <p className='text-primary'>{t('quebecSubtitle')}</p>
            <p className='text-tertiary'>{t('quebecDate')}</p>
          </div>

          <Trans parent='h2' i18nKey='quebecTitle' className='text-4xl-mobile text-secondary md:text-4xl'></Trans>

          <div className='mt-6 grid gap-16 xl:grid-cols-2'>
            <div className='flex items-center justify-center overflow-hidden rounded-lg'>
              <img className='w-full' src={QuebecImage} alt='Report' />
            </div>

            <div className='flex flex-col gap-4'>
              <Trans i18nKey='quebecDescription'></Trans>

              <p className='mt-2 text-sm text-tertiary'>{t('quebecNote')}</p>

              <Button className='mt-6 w-full self-end md:w-fit' external type='primary-outlined' href={PLResumePDF}>
                {t('quebecButton')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className='container mx-auto px-5 pb-20 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='flex flex-wrap justify-center gap-x-10 gap-y-6 rounded-2xl bg-secondary p-5 text-2xl text-white md:p-10'
        >
          <p>{t('element1')}</p>
          <p>{t('element2')}</p>
          <p>{t('element3')}</p>
          <p>{t('element4')}</p>
          <p>{t('element5')}</p>
          <p>{t('element6')}</p>
          <p>{t('element7')}</p>
          <p>{t('element8')}</p>
          <p>{t('element9')}</p>
          <p>{t('element10')}</p>
          <p>{t('element11')}</p>
          <p>{t('element12')}</p>
          <p>{t('element13')}</p>
          <p>{t('element14')}</p>
          <p>{t('element15')}</p>
          <p>{t('element16')}</p>
          <p>{t('element17')}</p>
          <p>{t('element18')}</p>
        </motion.div>
      </div>

      <div className='container mx-auto px-5 pb-20 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-4 rounded-2xl bg-white p-5 md:p-10'
        >
          <div className='flex gap-10'>
            <p className='text-primary'>{t('cmiSubtitle')}</p>
            <p className='text-tertiary'>{t('cmiDate')}</p>
          </div>

          <Trans parent='h2' i18nKey='cmiTitle' className='text-4xl-mobile text-secondary md:text-4xl'></Trans>

          <div className='mt-6 grid gap-16 xl:grid-cols-2'>
            <div className='flex justify-center overflow-hidden rounded-lg'>
              <div className='sticky max-w-md'>
                <img src={CMImage} alt='Critical Minerals Institute logo' />
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <ShowMoreText
                lines={12}
                more={t('cmiReadMore')}
                less={t('cmiShowLess')}
                anchorClass='show-more-button'
                truncatedEndingComponent={'...'}
              >
                <Trans i18nKey='cmiDescription'></Trans>
              </ShowMoreText>

              <p className='text-sm text-tertiary'>{t('cmiNote')}</p>

              <Button
                className='mt-6 w-full self-end md:w-fit'
                external
                type='primary-outlined'
                href='https://criticalmineralsinstitute.com/'
              >
                {t('cmiButton')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className='container mx-auto px-5 pb-20 md:px-10'>
        <div className='grid gap-16 rounded-2xl bg-secondary p-4 md:p-8'>
          <DataWrapper
            title="What's Driving Mineral Demand"
            src='https://datawrapper.dwcdn.net/ZBe2I/2/?transparent=true'
          ></DataWrapper>

          <DataWrapper
            title='Required scale-up in Demand and Mines'
            src='https://datawrapper.dwcdn.net/qOC7L/2/?transparent=true'
          ></DataWrapper>

          <DataWrapper
            title='Mineral Requirements for the Clean Energy Transition'
            src='https://datawrapper.dwcdn.net/FPeA0/3/?transparent=true'
          ></DataWrapper>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Critical Materials | Coniagas Battery Metals</title>
      <meta name='description' content='Coniagas Battery Metals. Critical Everywhere. All at Once.' />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "critical-materials"] }, language: { eq: $language } }) {
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
