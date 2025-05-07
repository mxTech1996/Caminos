'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { dataSite } from '@/data';

const testimonials = dataSite.references;

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

const getBgColor = (name) => {
  const colors = [
    'bg-[#E0F2FE]',
    'bg-[#FCE7F3]',
    'bg-[#FEF3C7]',
    'bg-[#DDD6FE]',
    'bg-[#DCFCE7]',
  ];
  return colors[name.charCodeAt(0) % colors.length];
};

export default function TestimonialSection() {
  return (
    <section className='bg-white py-20 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold text-[#1F2937] mb-4'
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#4B5563] mb-12 max-w-2xl mx-auto'
        >
          Freight business owners and logistics managers trust us to guide their
          operations with experience and clarity.
        </motion.p>

        <div className='grid md:grid-cols-2 gap-6 text-left'>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
              className='bg-[#F4F4F5] p-6 rounded-lg shadow hover:shadow-md transition'
            >
              <div className='flex items-center mb-4'>
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className='w-12 h-12 rounded-full object-cover mr-4'
                  />
                ) : (
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-[#1F2937] mr-4 ${getBgColor(
                      t.name
                    )}`}
                  >
                    {getInitials(t.name)}
                  </div>
                )}
                <h4 className='font-semibold text-[#1F2937] text-sm'>
                  {t.name}
                </h4>
              </div>
              <p className='text-sm text-[#4B5563] mb-4'>“{t.description}”</p>
              <div className='flex text-yellow-400 text-lg'>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
