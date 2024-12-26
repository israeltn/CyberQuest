import Image from 'next/image';
import Mata from '@/assets/team/Marta Arroyabe.jpg';
import Ville from '@/assets/team/Ville Karhusaari.jpg';
import Ignacio from '@/assets/team/1651852467683.jpeg';

export const Team = () => {
  return (
    <section className="mt-14 h-auto">
      <div className="w-auto h-auto flex flex-col justify-center items-center">
        <div className='flex justify-center text-center pb-1'>
          <h1 className='text-black font-bold text-3xl'>Team</h1>
        </div>
        {/* Flex container for Team members */}
        <div className='flex flex-wrap justify-center items-center gap-8 lg:mx-28 py-8'>
          {/* Individual team member container */}
          <div className='flex flex-col items-center justify-center w-full sm:w-auto lg:w-[150]'>
            <div className='lg:w-[150px] lg:h-[150px] border-4 border-gray-400 hover:bg-transparent p-1 rounded-full shadow-md'>
              <Image
                src={Mata}
                alt="Dr. Marta F. Arroyabe"
                width={150}
                height={150}
                layout="intrinsic"
                className="object-contain hover:scale-110 rounded-full w-[50] h-[50] lg:w-[200] lg:h-[200]"
              />
            </div>
            <a  href="https://www.linkedin.com/in/marta-f-arroyabe/">
              <h1 className='text-center text-black text-md font-semibold p-2 hover:text-slate-500'>
                Dr. Marta F. Arroyabe
              </h1>
          
            </a>

            <div className=' flex w-[20rem]'>
              <p className='text-center text-black w-[100]'>
                Reader at Essex Business School with expertise in innovation management, cybersecurity and
                digital transformation in small businesses
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full sm:w-auto'>
            <div className='lg:w-[150px] lg:h-[150px] border-4 border-gray-400 hover:bg-transparent p-1 rounded-full shadow-md'>
              <Image
                src={Ville}
                alt="Ville Karhusaari"
                width={150}
                height={150}
                layout="intrinsic"
                className="object-contain hover:scale-110 rounded-full"
              />
            </div>
            <a href="https://www.linkedin.com/in/ville-karhusaari/">
              <h1 className='text-center text-black text-md font-semibold p-2 hover:text-slate-500'>
              Ville Karhusaari
              </h1>
            </a>
            
            <div className=' flex w-[20rem]'>
              <p className='text-center text-black w-[100]'>
                Facilitates external relationships, manages contractual arrangements and fosters collaborations with external organizations
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full sm:w-auto'>
            <div className='lg:w-[150px] lg:h-[150px] border-4 border-gray-400 hover:bg-transparent p-1 rounded-full shadow-md'>
              <Image
                src={Ignacio}
                alt="Ignacio Fernandez"
                width={150}
                height={150}
                layout="intrinsic"
                className="object-contain hover:scale-110 rounded-full"
              />
            </div>
            <a href="https://www.linkedin.com/in/ignaciofernandezdearroyabe/">
              <h1 className='text-center text-black text-md font-semibold p-2 hover:text-slate-500'>
                Ignacio Fernandez
              </h1>
            </a>

            <div className=' flex w-[20rem]'>
              <p className='text-center text-black w-[100]'>
                Researcher at Loughborough University and cybersecurity manager at Lloyds Banking Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
