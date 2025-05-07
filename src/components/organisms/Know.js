'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const info = dataSite.info;

export default function CompanyInfoSection() {
  return (
    <section className='bg-[#F4F4F5] py-20 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold text-[#1F2937] mb-4 text-center'
        >
          About Our Freight Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#4B5563] mb-12 text-center max-w-2xl mx-auto'
        >
          Our company offers expert consulting for local freight transport
          operations, providing tailored insights for cargo management, route
          planning, and delivery scheduling.
        </motion.p>

        <div className='grid md:grid-cols-2 gap-6'>
          {info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className='bg-white p-6 rounded-lg shadow hover:shadow-md transition'
            >
              <h3 className='text-lg font-semibold text-[#1F2937] mb-2'>
                {item.title}
              </h3>
              <p className='text-[#4B5563] text-sm whitespace-pre-line'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
