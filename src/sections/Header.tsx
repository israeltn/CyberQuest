import Image from 'next/image';
import logo from '@/assets/logo.png'; // Adjust the path based on your project structure

export const Header = () => {
  return (
    <header className="py-4">
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
            <button>Play</button>
          </div>
        </div>
      </div>
    </header>
  );
};
