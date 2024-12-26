export const Footer = () => {
  return <footer className=" w-auto mt-14">
    <div className="w-auto h-[13rem] bg-black bg-gradient-to-b from-[#0a0a0a] via-[#212229] to-[#111011] bg-transparent opacity-990">
      <div className=" grid-flow-col justify-center items-center lg:flex lg:flex-row lg:justify-between  mt-4">
        <div className=" lg:w-1/2 justify-center text-center  lg:mt-16">
          <h1 className=" text-white">CONTACT US</h1>
          <div>
            <p className=" text-white py-2">
              Email: cybersecuritygame@essex.ac.uk
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 justify-center text-center lg:mt-16">
          <h1 className=" text-white">ADDRESS</h1>
          <div>
            <p className=" text-white py-2">
              University of Essex Wivenhoe Park CO4 3SQ United Kingdom
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center lg:mt-12">
        <h1 className=" text-white">© University of Essex, 2024</h1>
      </div>
    </div>
  </footer>;
};
