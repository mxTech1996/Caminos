import { dataSite } from '@/data';

const freightServices = dataSite.services;

export default function Services() {
  return (
    <section className='bg-[#F4F4F5] py-20 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-3xl font-bold text-[#1F2937] mb-4'>
          Our Local Freight Consulting Services
        </h2>
        <p className='text-[#4B5563] mb-12 max-w-2xl mx-auto'>
          Expert guidance to improve your general local freight transport
          business through operations, compliance, and cost-saving strategies.
        </p>

        <div className='grid md:grid-cols-2 gap-6 text-left'>
          {freightServices.map((service, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition'
            >
              <img
                src={service.image}
                alt={service.title}
                className='w-20 h-20 object-cover rounded-full mb-4'
              />
              <h3 className='text-lg font-semibold text-[#1F2937] mb-2'>
                {service.title}
              </h3>
              <p className='text-sm text-[#4B5563]'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
