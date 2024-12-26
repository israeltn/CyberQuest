import heroimage from '@/assets/heroimage1.png';
import Image from 'next/image';

export const Hero = () => {
  return <section className=' mt-16'>
    <div className=' container'>
      <div className='flex justify-center '>
      <div className="flex justify-between ">
        <div className='w-1/2'>
          <h1 className="text-white font-bold text-3xl mb-2">Cybersecurity</h1>
          <p className="text-white font-bold text-3xl mb-6">Essential Game</p>
          <p className=' text-white'>A cybersecurity simulation game that immerses small and medium enterprise (SMEs) managers in a virtual environment,
             guiding them through the process of integrating cybersecurity best practices into their strategies for adopting new digital technologies. </p>
          <button className=" h-10 text-white px-4 py-[1] font-bold rounded-lg border-2 border-e-rose-900">Play</button>
        </div>
        <div className='1/2'>
          <Image
            src={heroimage}
            alt="hero image"
            width={400}
            height={40}
            className="object-contain "
          />
        </div>
      </div>
      </div>
    </div>
  </section>;
};
