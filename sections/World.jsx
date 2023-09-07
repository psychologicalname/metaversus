'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} z-10 relative`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles='text-center' />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles='text-center' />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img
          src='/map.png'
          alt='map'
          className='w-full h-full object-cover'
        />
        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full shadow-[0px_15px_20px_0px_#00000080] bg-[#de8e7a] blur-md brightness-100' />
        <img
          src='/people-01.png'
          alt='people'
          className='absolute bottom-20 right-20 w-[70px] h-[70px] p-1.5 rounded-full bg-[rgba(93,102,128,0.5)]'
        />
        <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full shadow-[0px_15px_20px_0px_#00000080] bg-[#f693da] blur-md brightness-100' />
        <img
          src='/people-02.png'
          alt='people'
          className='absolute top-10 left-20 w-[70px] h-[70px] rounded-full p-1.5 bg-[rgba(93,102,128,0.5)]'
        />
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full shadow-[0px_15px_20px_0px_#00000080] bg-[#8e98b5] blur-md brightness-100' />
        <img
          src='/people-03.png'
          alt='people'
          className='absolute top-1/2 left-[45%] w-[70px] h-[70px] rounded-full p-1.5 bg-[rgba(93,102,128,0.5)]'
        />
        <div className='absolute top-[45%] left-[15%] w-[160px] h-[120px] p-[6px] rounded-[24px] shadow-[0px_15px_20px_0px_#00000080] bg-[#a34fab] blur-lg brightness-100' />
        <img
          src='/card1.png'
          alt='card'
          className='absolute top-[45%] left-[15%] w-[160px] h-[120px] rounded-[24px] p-1.5 bg-[rgba(93,102,128,0.35)]'
        />
        <div className='absolute top-10 left-[70%] w-[160px] h-[120px] p-[6px] rounded-[24px] shadow-[0px_15px_20px_0px_#00000080] bg-[#8f62ce] blur-lg brightness-100' />
        <img
          src='/card2.png'
          alt='card'
          className='rounded-[24px] absolute top-10 left-[70%] w-[160px] h-[120px] p-1.5 bg-[rgba(93,102,128,0.35)]'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
