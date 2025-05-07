'use client';

import Footer from '@/components/organisms/Footer';
import StickyNavbar from '@/components/organisms/Navbar';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

const caseStudies = dataSite.products;
const AllProducts = () => {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <main className='bg-[#FDB813]'>
      <StickyNavbar />
      <section className='bg-[#FDB813] py-20 px-6 md:px-20 text-[#000]'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex justify-between items-center mb-10'>
            <div>
              <h2 className='text-3xl font-bold mb-2'>Our Products</h2>
              <p className='text-[#000]'>
                Freight companies improved local cargo transport with our
                consulting.
              </p>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {caseStudies.map((cs, index) => {
              const isInCart = validateProductInCart(cs.id);
              const handleAddToCart = () => {
                handleAddOrRemoveProduct(cs.id);
              };
              return (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow p-4 flex flex-col justify-between'
                >
                  <img
                    src={cs.image}
                    alt={cs.name}
                    className='rounded-md h-40 object-cover mb-4'
                  />
                  <div>
                    {/* <p className='text-xs uppercase text-gray-500'>{cs.subtitle}</p> */}
                    <h3 className='font-semibold text-lg mb-2'>{cs.name}</h3>
                    <p className='text-sm text-[#4B5563] mb-4'>
                      {cs.description}
                    </p>
                    <hr className='mb-3' />
                    <div className='flex justify-between text-sm font-medium'>
                      <span>${cs.price}</span>
                      {/* button add to cart */}
                      <button
                        onClick={handleAddToCart}
                        style={{
                          backgroundColor: isInCart ? '#FD8C13FF' : '#FDB813',
                        }}
                        className='bg-[#FDB813] hover:bg-[#fbbf24] text-black font-semibold px-4 py-2 rounded-md shadow flex items-center gap-2 transition'
                      >
                        <span>→</span>
                        {isInCart ? 'Remove from cart' : 'Add to cart'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default AllProducts;
