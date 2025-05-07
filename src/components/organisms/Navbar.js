'use client';

import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';

const StickyNavbar = () => {
  const { products } = useCart();
  return (
    <header className='sticky top-0 z-50 bg-transparent py-6'>
      <nav className='max-w-7xl mx-auto flex items-center justify-between bg-white rounded-full px-6 py-3 shadow-md'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <div className='text-2xl font-bold text-black'>🔗</div>
          <span className='font-bold text-xl text-[#1F2937]'>ElasticScale</span>
        </div>

        {/* Links */}
        <ul className='hidden md:flex items-center space-x-8 font-medium text-sm text-[#1F2937]'>
          <Link href='/'>
            <li className='hover:text-[#FDB813] transition'>Home</li>
          </Link>
          <Link href='/products'>
            <li className='hover:text-[#FDB813] transition'>Products</li>
          </Link>
          <Link href='/#services'>
            <li className='hover:text-[#FDB813] transition flex items-center space-x-1'>
              <span>Services</span>
            </li>
          </Link>
          <Link href='/#about'>
            <li className='hover:text-[#FDB813] transition'>About</li>
          </Link>
          <Link href='/more-information'>
            <li className='hover:text-[#FDB813] transition'>Contact</li>
          </Link>
        </ul>

        {/* CTA Button */}
        <Link href='/my-cart'>
          <button className='bg-[#FDB813] hover:bg-[#fbbf24] text-black font-medium px-5 py-2 rounded-md shadow flex items-center space-x-2 transition'>
            {/* counter cart */}
            <div className='bg-[#1F2937] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
              {products.length}
            </div>
            <span>Go to Cart</span>
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default StickyNavbar;
