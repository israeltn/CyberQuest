import LogoIcon from '@/assets/CyberQuestlogo.svg';

export const Header = () => {

  return (
    <header className="py-4">
      <div className="container">
        <div className="flex justify-between">
          <div className=''>
            <LogoIcon className="h-8 w-86"/>
          </div>
          <div className='text-white'>
            
            <span>Menu</span>
            <button>Play</button>
          </div>
        </div>
      </div>
    </header>
  )
};
