'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.paddings} relative py-8`}
  >
    <div className='footer-gradient' />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap ap-5'>
        <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
          Enter the Metaverse
        </h4>
        <button
          type='button'
          className='flex items-center h-fit py-4 px-6 rounded-[32px] gap-[12px] bg-[#25618B]'
        >
          <img
            src='/headset.svg'
            alt='headset'
            className='w-[24px] h-[24px] object-contain'
          />
          <span className='text-white uppercase text-[16px] font-normal'>Enter Metaverse</span>
        </button>
      </div>

      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10' />

        <div className='flex items-center justify-between gap-4 flex-wrap'>
          <h4 className='font-extrabold text-white text-[24px]'>
            METAVERUS
          </h4>
          <p className='font-normal text-white text-[14px] opacity-50'>
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className='flex gap-4'>
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className='w-[24px] h-[24px] object-contain cursor-pointer'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
