'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function FreightConsultingIntro() {
  return (
    <section className='bg-white py-20 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={dataSite.services[0].image}
            alt='Freight Consulting Illustration'
            className='w-full max-w-md mx-auto md:mx-0'
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-sm font-medium uppercase text-[#4B5563] mb-2'>
            Move your freight smarter
          </p>
          <h2 className='text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-6'>
            Local Freight Consulting Experts
          </h2>
          <p className='text-[#4B5563] mb-4'>
            Our team provides specialized consulting for local freight
            businesses. Whether you're transporting cargo across urban,
            suburban, or industrial areas, we offer strategies to improve
            delivery accuracy, route efficiency, and vehicle management.
          </p>
          <p className='text-[#4B5563] mb-6'>
            From compliance to cost-saving route planning, our experts help you
            run a safer, more efficient, and scalable transport operation
            tailored to your local market.
          </p>

          <h3 className='font-semibold text-[#1F2937] mb-4'>
            Why choose our freight consultants
          </h3>
          <ul className='text-[#4B5563] space-y-3 mb-6'>
            <li className='flex items-start'>
              <span className='text-[#FDB813] mr-3 text-xl mt-[2px]'>▣</span>
              Increased route efficiency and reduced fuel costs
            </li>
            <li className='flex items-start'>
              <span className='text-[#FDB813] mr-3 text-xl mt-[2px]'>▣</span>
              Assistance with permits and transport compliance
            </li>
            <li className='flex items-start'>
              <span className='text-[#FDB813] mr-3 text-xl mt-[2px]'>▣</span>
              Strategic support for growing your local delivery operations
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
