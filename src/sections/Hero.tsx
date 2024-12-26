import heroimage from '@/assets/heroimage1.png';
import bgimage from '@/assets/bgimage.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${bgimage.src})` }}
    >
      <div className="container mx-auto ">
        <div className="flex flex-wrap items-center justify-between  mt-[9.0rem] mb-[6rem]">
          <div className="w-full lg:w-[60%] mb-8 lg:mb-0 justify-center items-center">
            <h1 className="text-black font-bold text-4xl mb-2">Cybersecurity</h1>
            <p className="text-black font-bold text-3xl mb-6">Essential Game</p>
            <p className="text-black text-[0.9rem] leading-relaxed">
              CyberQuest is simulation game that immerses small and medium enterprise (SMEs) managers in a virtual environment,
              guiding them through the process of integrating cybersecurity best practices into their strategies for adopting new digital technologies.
            </p>

            <div className="mt-6 justify-center items-center text-center md:flex lg:justify-start lg:flex ">
              <a
                href="https://www.essex.ac.uk/research-projects/cyber-security-in-uk-smes"
                className="px-4 py-2 text-black cursor-pointer hover:text-[#4E2D6C] inline-flex justify-center items-center rounded-lg border-4 border-[#4E2D6C] hover:border-red-500"
              >
                Theoretical Project
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[40%]  flex justify-center">
            <Image
              src={heroimage}
              alt="hero image"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
