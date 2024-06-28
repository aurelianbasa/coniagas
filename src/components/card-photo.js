import * as React from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { Dialog, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

export default function CardPhoto({ image = '' }) {
  let [isOpenPopup, setIsOpenPopup] = React.useState(false);

  return (
    <>
      <div
        className='group relative cursor-pointer overflow-hidden rounded-lg'
        onClick={() => setIsOpenPopup(true)}
        onKeyDown={() => setIsOpenPopup(true)}
        role='presentation'
      >
        <div className='absolute hidden size-full items-center justify-center bg-black/60 group-hover:flex'>
          <RiSearch2Line className='size-10 text-white' />
        </div>

        <img className='h-80 w-full object-cover' src={image} alt='Metal' />
      </div>

      <AnimatePresence>
        {isOpenPopup && (
          <Dialog static open={isOpenPopup} onClose={() => setIsOpenPopup(false)} className='relative z-50'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/60'
            />
            <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className='flex w-full max-w-screen-lg items-center'
              >
                <img className='w-full rounded-lg' src={image} alt='Metal' />
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
