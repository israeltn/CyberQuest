import Image from 'next/image';
import discribe from '@/assets/team/Discribe logo.png';
import uniessex from '@/assets/team/University of Essex Logo.png';
import ukri from '@/assets/team/ukri.png';

export const Companies = () => {
  return (
    <section className="mt-20 h-auto">
      <div className="flex w-auto h-auto justify-center ">
        {/* Flex container for logos */}
        <div className="flex justify-center items-center gap-8 py-8 px-12 bg-white ">
          {/* Individual logo container */}
          <div className="w-40 h-10 flex items-center justify-center">
            <Image
              src={discribe}
              alt="Discribe logo"
              layout="intrinsic" // Ensures responsive sizing
              className="object-contain"
            />
          </div>
          <div className="w-40 h-10 flex items-center justify-center">
            <Image
              src={uniessex}
              alt="University of Essex logo"
              layout="intrinsic" // Ensures responsive sizing
              className="object-contain"
            />
          </div>
          <div className="w-40 h-10 flex items-center justify-center">
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
        <div className='flex justify-center items-center mt-16 pb-8 mx-20'>
              <p className=' text-white items-center'>
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
