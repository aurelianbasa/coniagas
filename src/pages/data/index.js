import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import Layout from '@components/layout';
import DataWrapper from '@components/data-wrapper';

import MHYMapImage from '@media/data/mhy-map.webp';
import GraviMapImage from '@media/data/gravi-map.webp';
import MHYSectionImage from '@media/data/mhy-section.webp';
import GraviSectionImage from '@media/data/gravi-section.webp';
import DiscoveryMapImage from '@media/data/discovery-map.webp';
import DiscoverySectionImage from '@media/data/discovery-section.webp';

export default function Data() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className='container mx-auto grid gap-20 px-5 pt-44 md:px-10'>
        <div className='grid gap-10'>
          <h2 className='text-center text-4xl text-secondary'>{t('tab1Title')}</h2>

          <TabGroup className='grid gap-10 pb-20'>
            <TabList className='mx-auto flex w-fit rounded-lg bg-white'>
              <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
                {t('tab1Item1')}
              </Tab>
              <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
                {t('tab1Item2')}
              </Tab>
              <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
                {t('tab1Item3')}
              </Tab>
            </TabList>

            <TabPanels className='min-h-48 md:min-h-96'>
              <TabPanel className='mx-auto max-w-[960px]'>
                <motion.div
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  initial={{ y: '80px', opacity: 0 }}
                  whileInView={{ y: '0', opacity: 1 }}
                >
                  <DataWrapper title='MHY Zone' src='https://datawrapper.dwcdn.net/4Vg5N/1/?transparent=true' />
                </motion.div>
              </TabPanel>
              <TabPanel className='mx-auto max-w-[960px]'>
                <motion.div
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  initial={{ y: '80px', opacity: 0 }}
                  whileInView={{ y: '0', opacity: 1 }}
                >
                  <img src={MHYMapImage} alt='MHY Map' />
                </motion.div>
              </TabPanel>
              <TabPanel className='mx-auto max-w-[960px]'>
                <motion.div
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  initial={{ y: '80px', opacity: 0 }}
                  whileInView={{ y: '0', opacity: 1 }}
                >
                  <img src={MHYSectionImage} alt='MHY Section' />
                </motion.div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>

        <div className='grid gap-10'>
          <h2 className='text-center text-4xl text-secondary'>{t('tab2Title')}</h2>

          <TabGroup className='grid gap-10 pb-20'>
            <TabList className='mx-auto flex w-fit rounded-lg bg-white'>
              <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
                {t('tab2Item1')}
              </Tab>
              <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
                {t('tab2Item2')}
              </Tab>
              <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
                {t('tab2Item3')}
              </Tab>
            </TabList>

            <TabPanels className='min-h-48 md:min-h-96'>
              <TabPanel className='mx-auto max-w-[960px]'>
                <motion.div
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  initial={{ y: '80px', opacity: 0 }}
                  whileInView={{ y: '0', opacity: 1 }}
                >
                  <DataWrapper title='Gravi Zone' src='https://datawrapper.dwcdn.net/YI50E/1/?transparent=true' />
                </motion.div>
              </TabPanel>
              <TabPanel className='mx-auto max-w-[960px]'>
                <motion.div
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  initial={{ y: '80px', opacity: 0 }}
                  whileInView={{ y: '0', opacity: 1 }}
                >
                  <img src={GraviMapImage} alt='Gravi Map' />
                </motion.div>
              </TabPanel>
              <TabPanel className='mx-auto max-w-[960px]'>
                <motion.div
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  initial={{ y: '80px', opacity: 0 }}
                  whileInView={{ y: '0', opacity: 1 }}
                >
                  <img src={GraviSectionImage} alt='Gravi Section' />
                </motion.div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>

        <div className='grid gap-10'>
          <h2 className='text-center text-4xl text-secondary'>{t('tab3Title')}</h2>

          <TabGroup className='grid gap-10 pb-20'>
            <TabList className='mx-auto flex w-fit rounded-lg bg-white'>
              <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
                {t('tab3Item1')}
              </Tab>
              <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
                {t('tab3Item2')}
              </Tab>
              <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
                {t('tab3Item3')}
              </Tab>
            </TabList>

            <TabPanels className='min-h-48 md:min-h-96'>
              <TabPanel className='mx-auto max-w-[960px]'>
                <motion.div
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  initial={{ y: '80px', opacity: 0 }}
                  whileInView={{ y: '0', opacity: 1 }}
                >
                  <DataWrapper title='Discovery Zone' src='https://datawrapper.dwcdn.net/DieoU/1/?transparent=true' />
                </motion.div>
              </TabPanel>
              <TabPanel className='mx-auto max-w-[960px]'>
                <motion.div
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  initial={{ y: '80px', opacity: 0 }}
                  whileInView={{ y: '0', opacity: 1 }}
                >
                  <img src={DiscoveryMapImage} alt='Discovery Map' />
                </motion.div>
              </TabPanel>
              <TabPanel className='mx-auto max-w-[960px]'>
                <motion.div
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  initial={{ y: '80px', opacity: 0 }}
                  whileInView={{ y: '0', opacity: 1 }}
                >
                  <img src={DiscoverySectionImage} alt='Discovery Section' />
                </motion.div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Data | Coniagas Battery Metals</title>
      <meta name='description' content='Coniagas Battery Metals. MHY Zone, Gravi Zone and Discovery Zone.' />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "data"] }, language: { eq: $language } }) {
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
