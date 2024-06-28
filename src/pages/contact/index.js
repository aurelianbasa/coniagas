import * as React from 'react';
import { graphql } from 'gatsby';
import {
  RiPhoneLine,
  RiMailSendLine,
  RiErrorWarningLine,
  RiGitRepositoryLine,
  RiCheckboxCircleLine,
} from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';

import OverviewImage from '@media/contact/overview.png';

export default function Contact() {
  const { t } = useTranslation();

  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isFormVisible, setIsFormVisible] = React.useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('form-name', 'Contact');

    try {
      const response = await fetch('https://formspree.io/f/xbjvdkyj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: formData,
      });

      setIsFormVisible(false);

      if (response.status === 200) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log(error.message);
      setIsError(true);
    }
  };

  return (
    <Layout>
      <div className='container mx-auto grid gap-16 px-5 pb-20 pt-44 md:px-10 lg:grid-cols-2'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ x: '-80px', opacity: 0 }}
          whileInView={{ x: '0', opacity: 1 }}
          className='flex flex-col justify-between gap-10 py-0 lg:min-h-[832px] lg:py-10'
        >
          <div className='grid gap-4'>
            <p className='text-tertiary'>{t('contactSubtitle')}</p>
            <h2 className='mb-4 text-4xl-mobile text-secondary md:text-4xl'>{t('contactTitle')}</h2>
            <p>{t('contactDescription')}</p>
          </div>
          <div className='grid gap-4 text-secondary'>
            <div className='flex items-center gap-6'>
              <div className='flex size-10 items-center justify-center rounded-full bg-tertiary/10 md:size-20'>
                <RiGitRepositoryLine className='size-5 md:size-10' />
              </div>

              <Trans i18nKey='contactName' className='font-semibold'></Trans>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex size-10 items-center justify-center rounded-full bg-tertiary/10 md:size-20'>
                <RiPhoneLine className='size-5 md:size-10' />
              </div>
              <a className='font-semibold' href='tel:416-710-2410'>
                {t('contactPhone')}
              </a>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex size-10 items-center justify-center rounded-full bg-tertiary/10 md:size-20'>
                <RiMailSendLine className='size-5 md:size-10' />
              </div>
              <a className='font-semibold' href='mailto:waynecheveldayoff@gmail.com'>
                {t('contactEmail')}
              </a>
            </div>
          </div>

          <Button
            external
            className='w-full self-start md:w-fit'
            type='primary-outlined'
            href='https://calendly.com/aurelianbasa/30-minute-meeting?hide_event_type_details=1&hide_gdpr_banner=1'
          >
            {t('bookButton')}
          </Button>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ x: '80px', opacity: 0 }}
          whileInView={{ x: '0', opacity: 1 }}
          className='flex min-h-[600px] flex-col gap-6 rounded-2xl bg-white p-5 md:p-10 lg:min-h-[832px]'
        >
          <div className='grid gap-4'>
            <p className='text-tertiary'>{t('formSubtitle')}</p>
            <Trans parent='h2' i18nKey='formTitle' className='mb-4 text-4xl-mobile text-secondary md:text-4xl'></Trans>
            <p>{t('formDescription')}</p>
          </div>

          <div className='grid grow'>
            {isFormVisible && (
              <form className='grid gap-4' onSubmit={handleSubmit}>
                <input
                  className='w-full rounded-lg border border-black bg-transparent px-6 py-4 outline-0 placeholder:text-tertiary'
                  name='name'
                  placeholder={t('formName')}
                  required
                />

                <input
                  className='w-full rounded-lg border border-black bg-transparent px-6 py-4 outline-0 placeholder:text-tertiary'
                  name='_replyto'
                  placeholder={t('formEmail')}
                  type='email'
                  required
                />

                <input
                  className='w-full rounded-lg border border-black bg-transparent px-6 py-4 outline-0 placeholder:text-tertiary'
                  name='location'
                  placeholder={t('formLocation')}
                  required
                />

                <input
                  className='w-full rounded-lg border border-black bg-transparent px-6 py-4 outline-0 placeholder:text-tertiary'
                  name='subject'
                  placeholder={t('formSubject')}
                  required
                />

                <textarea
                  className='min-h-36 rounded-lg border border-black px-6 py-4 outline-0 placeholder:text-tertiary'
                  name='message'
                  placeholder={t('formMessage')}
                  required
                ></textarea>

                <button
                  className='mt-2 rounded-lg bg-primary px-6 py-4 text-white hover:shadow-button md:w-fit'
                  type='submit'
                >
                  {t('formButton')}
                </button>
              </form>
            )}

            {isSuccess && (
              <div className='flex grow flex-col items-center justify-center gap-6 text-center'>
                <RiCheckboxCircleLine className='size-20 text-primary' />
                {t('formSuccessMessage')}
              </div>
            )}

            {isError && (
              <div className='flex grow flex-col items-center justify-center gap-6 text-center'>
                <RiErrorWarningLine className='size-20 text-primary' />
                {t('formErrorMessage')}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div
        style={{ '--bg-image-url': `url(${OverviewImage})` }}
        className={`bg-[image:var(--bg-image-url)] bg-cover bg-center py-20`}
      >
        <div className='container mx-auto grid gap-6 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-lg bg-white p-5 md:p-10'
          >
            <div className='mb-4 flex items-center justify-between gap-6 text-secondary'>
              <p className='text-2xl'>{t('auditors')}</p>
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10'>
                <RiGitRepositoryLine className='size-10' />
              </div>
            </div>

            <Trans i18nKey='auditorsAddress' className='mb-6'></Trans>

            <p>
              <span className='text-tertiary'>{t('auditorsPhoneTitle')}</span>
              <a href='tel:416-496-1234'>{t('auditorsPhone')}</a>
            </p>
            <p>
              <span className='text-tertiary'>{t('auditorsFaxTitle')}</span>
              <a href='tel:416-496-0125'>{t('auditorsFax')}</a>
            </p>
            <p>
              <span className='text-tertiary'>{t('auditorsEmailTitle')}</span>
              <a href='mailto:info@uhymh.com'>{t('auditorsEmail')}</a>
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-lg bg-secondary p-5 text-white md:p-10'
          >
            <div className='mb-4 flex items-center justify-between gap-6'>
              <p className='text-2xl'>{t('office')}</p>
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-tertiary'>
                <RiGitRepositoryLine className='size-10' />
              </div>
            </div>

            <Trans i18nKey='officeAddress' className='mb-6'></Trans>

            <p>
              <span className='text-tertiary'>{t('officePhoneTitle')}</span>
              <a href='tel:604-828-1475'>{t('officePhone')}</a>
            </p>
            <p>
              <span className='text-tertiary'>{t('officeFaxTitle')}</span>
              <a href='tel:604-608-3512'>{t('officeFax')}</a>
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-lg bg-white p-5 md:p-10'
          >
            <div className='mb-4 flex items-center justify-between gap-6 text-secondary'>
              <p className='text-2xl'>{t('transfer')}</p>
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10'>
                <RiGitRepositoryLine className='size-10' />
              </div>
            </div>

            <Trans i18nKey='transferAddress' className='mb-6'></Trans>

            <p>
              <span className='text-tertiary'>{t('transferPhoneTitle')}</span>
              <a href='tel:604-661-9400'>{t('transferPhone')}</a>
            </p>
            <p>
              <span className='text-tertiary'>{t('transferFaxTitle')}</span>
              <a href='tel:604-661-9401'>{t('transferFax')}</a>
            </p>
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
      <title>Contact | Coniagas Battery Metals</title>
      <meta name='description' content='Coniagas Battery Metals. Have some feedback for us?.' />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "contact"] }, language: { eq: $language } }) {
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
