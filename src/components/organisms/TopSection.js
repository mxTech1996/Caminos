import { dataSite } from '@/data';

export default function TopSection() {
  return (
    <section id='about' className='bg-white py-20 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* Left: Illustration */}

        {/* Right: Content */}
        <div>
          <p className='text-sm font-medium uppercase text-[#4B5563] mb-2'>
            Optimize your transport operations
          </p>
          <h2 className='text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-6'>
            Local Freight Transport Consulting
          </h2>
          <p className='text-[#4B5563] mb-4'>
            Our team of logistics consultants specializes in{' '}
            <strong>local general freight transport</strong>, helping companies
            improve delivery efficiency, compliance, and overall operational
            performance. We provide expert guidance tailored to businesses
            transporting non-specialized goods within cities or regions.
          </p>
          <p className='text-[#4B5563] mb-6'>
            Whether you’re looking to scale your fleet, reduce costs, or
            streamline administrative processes, we’ll support you with
            step-by-step strategies that align with legal standards and business
            goals.
          </p>

          <h3 className='font-semibold text-[#1F2937] mb-4'>
            Key Benefits of Our Consulting
          </h3>
          <ul className='text-[#4B5563] space-y-3 mb-6'>
            <li className='flex items-start'>
              <span className='text-[#FDB813] mr-3 text-xl mt-[2px]'>▣</span>
              Route planning and fuel optimization for local deliveries
            </li>
            <li className='flex items-start'>
              <span className='text-[#FDB813] mr-3 text-xl mt-[2px]'>▣</span>
              Legal compliance with municipal and regional transport regulations
            </li>
            <li className='flex items-start'>
              <span className='text-[#FDB813] mr-3 text-xl mt-[2px]'>▣</span>
              Operational audits to reduce idle time and maintenance costs
            </li>
          </ul>
        </div>
        <div>
          <img
            src={dataSite.image_hero2}
            alt='Freight Consulting Illustration'
            className='w-full max-w-md mx-auto md:mx-0'
          />
        </div>
      </div>
    </section>
  );
}
