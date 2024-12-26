import Image from 'next/image';
import discribe from '@/assets/team/Discribe logo.png';
import uniessex from '@/assets/team/University of Essex Logo.png';
import ukri from '@/assets/team/ukri.png';

export const Companies = () => {
  return (
    <section className="mt-10 h-auto">
      <div className=" grid-flow-col lg:flex w-auto h-auto justify-center ">
        {/* Flex container for logos */}
        <div className=" flex lg:justify-center items-center gap-8 lg:py-10 lg:px-12 bg-white border-4  ">
          {/* Individual logo container */}
          <div className="lg:w-40 lg:h-10 flex items-center justify-center">
            <Image
              src={discribe}
              alt="Discribe logo"
              
              layout="intrinsic" // Ensures responsive sizing
              className="object-contain"
            />
          </div>
          <div className="lg:w-40 lg:h-10  flex items-center justify-center">
            <Image
              src={uniessex}
              width={200}
              alt="University of Essex logo"
              layout="intrinsic" // Ensures responsive sizing
              className="object-contain"
            />
          </div>
          <div className="lg:w-40 lg:h-10  flex items-center justify-center">
            <Image
              src={ukri}
              alt="UKRI logo"
              
              layout="intrinsic" // Ensures responsive sizing
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className=' container'>
        <div className='flex justify-center items-center mt-4 lg:mt-16 pb-8 lg:mx-20'>
              <p className=' text-black items-center text-md font-medium'>
              In the game, players will face challenges such as identifying critical assists, evaluating the security implications of emerging technologies, 
              selecting trustworthy technology vendors, and addressing challenges in securely integrating cutting-edge technologies. 
              The game emphasizes the balance between innovation and security, requiring players to make informed decisions to foster a secure adoption process.
               Through engaging scenarios and decision points, players develop skills in risk assessment, vendor evaluation,
               and adaptive decision-making, enhancing their awareness of secure digital technology adoption practices.
              </p>
        </div>

      </div>
    </section>
  );
};
