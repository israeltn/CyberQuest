import Image from 'next/image';
import discribe from '@/assets/team/Discribe logo.png';
import uniessex from '@/assets/team/University of Essex Logo.png';
import ukri from '@/assets/team/ukri.png';

export const Gamefeatures = () => {
  return (
    <section className="mt-10 h-auto">
      <div className="w-auto h-auto justify-center items-center">
        <div className=' flex justify-center text-center pb-8'>
          <h1 className=' text-white font-bold text-3xl'>Game Features</h1>
        </div>
        {/* Flex container for logos */}
        <div className="flex flex-row justify-center items-center gap-8 py-8 px-12">
          {/* Individual logo container */}
          <div className="w-[800] h-[700] flex items-center justify-center bg-white">
            <div>
              <Image
              src={discribe}
              alt="Discribe logo"
              layout="intrinsic" // Ensures responsive sizing
              className="object-contain"
            />
            </div>
          </div>
          <div className="w-40 h-10 flex items-center justify-center">
            <Image
              src={uniessex}
              alt="University of Essex logo"
              layout="intrinsic" // Ensures responsive sizing
              className="object-contain"
            />
          </div>
         
        </div>
      </div>
      
    </section>
  );
};
