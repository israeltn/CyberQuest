import Image from 'next/image';
import logo from '@/assets/logo.png'; // Adjust the path based on your project structure

export const Header = () => {
  return (
    <header className="py-4 border-b border-[#5b3e75]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src={logo} 
              alt="Logo" 
              width={130} 
              height={40} 
              className="object-contain" 
            />
          </div>
          <div className="text-white space-x-4">
            <span>Menu</span>
            <div className='border-2 hover:bg-[#4E2D6C] text-[#4E2D6C] font-bold  hover:text-white w-14 rounded-lg inline-flex justify-center items-center bg-slate-200'>
              <button className=' '>Play</button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
