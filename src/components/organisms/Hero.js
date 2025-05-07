import { dataSite } from '@/data';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='bg-[#FDB813] text-[#1F2937] py-20 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* Left: Text */}
        <div>
          <p className='text-sm font-medium uppercase mb-2 tracking-wide'>
            {dataSite.description}
          </p>
          <h1 className='text-4xl md:text-5xl font-extrabold leading-tight mb-6'>
            {dataSite.subtitle}
          </h1>
          <Link href={'/#about'}>
            <button className='bg-white text-[#1F2937] font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition flex items-center gap-2'>
              Discover our services →
            </button>
          </Link>
        </div>

        {/* Right: Illustration */}
        <div className='flex justify-center md:justify-end'>
          <img
            src={dataSite.image_hero}
            alt='AWS illustration'
            className='w-full max-w-md'
          />
        </div>
      </div>
    </section>
  );
}
