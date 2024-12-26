import Image from 'next/image';
import confi from '@/assets/game/confidiallity.png';
import antiv from '@/assets/game/antivirus2.png';
import emplybook from '@/assets/game/employeebook.png';
import screen from '@/assets/game/Screenshot 2024-09-11 181222.png';

export const Gamefeatures = () => {
  return (
    <section className="mt-10 h-auto">
      <div className="w-auto h-auto justify-center items-center">
        <div className=' flex justify-center text-center pb-2'>
          <h1 className=' text-black font-bold text-3xl'>Game Features</h1>
        </div>
        {/* Flex container for Game features 1 */}
        <div className='  lg:mx-16'>
          <div className=" grid-flow-row  lg:flex  justify-between items-center gap-4 py-8 px-10">
            {/* Individual logo container */}
            <div className='lg:w-1/2 items-center justify-center  lg:mt-1 mt-4'>
               <h1 className=' text-center text-black text-md font-semibold'>Understanding the CIA Triad</h1>
              <div className="  flex items-center justify-center pt-3">
              <div className='w-[520] h-[520] border-4 border-gray-400 hover:bg-transparent p-2 rounded-md shadow-md'>
                <Image
                  src={confi}
                  alt="Discribe logo"
                  width={500}
                  height={500}
                  layout="intrinsic" // Ensures responsive sizing
                  className="object-contain hover:scale-110"
                />
              </div>
            </div>
            </div>

            <div className='lg:w-1/2 items-center justify-center lg:mt-1 mt-4'>
               <h1 className=' text-center text-black text-md font-semibold'>Virus and Malware Protection</h1>
              <div className="  flex items-center justify-center pt-3">
              <div className='w-[520] h-[520]  border-4 border-gray-400 hover:bg-transparent p-2 rounded-md shadow-md'>
                <Image
                  src={antiv}
                  alt="Discribe logo"
                  width={500}
                  height={500}
                  layout="intrinsic" // Ensures responsive sizing
                  className="object-contain hover:scale-110"
                />
              </div>
            </div>
            </div>         



          </div>
        </div>
        {/* Flex container for Game features 2  */}

        <div className=' lg:mx-16'>
          <div className="grid-flow-col  lg:flex justify-between items-center gap-4 py-8 px-10">
            {/* Individual logo container */}
            <div className='lg:w-1/2 items-center justify-center '>
               <h1 className=' text-center text-black text-md font-semibold'>Access Control</h1>
              <div className="  flex items-center justify-center pt-3">
              <div className='w-[520] h-[520]  border-4 border-gray-400 hover:bg-transparent p-2 rounded-md shadow-md'>
                <Image
                  src={emplybook}
                  alt="Discribe logo"
                  width={500}
                  height={500}
                  layout="intrinsic" // Ensures responsive sizing
                  className="object-contain hover:scale-110"
                />
              </div>
            </div>
            </div>

            <div className='lg:w-1/2 items-center justify-center lg:mt-1 mt-4'>
               <h1 className=' text-center text-black text-md font-semibold'>Vendor Evaluation</h1>
              <div className="  flex items-center justify-center pt-3">
              <div className='w-[520] h-[520]  border-4 border-gray-400 hover:bg-transparent p-2 rounded-md shadow-md'>
                <Image
                 src={screen}
                  alt="Discribe logo"
                  width={500}
                  height={500}
                  layout="intrinsic" // Ensures responsive sizing
                  className="object-contain hover:scale-110"
                />
              </div>
            </div>
            </div>

          </div>
        </div>

       
      </div>

    </section>
  );
};
