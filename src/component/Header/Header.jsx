import './Header.css'
const Header = () => {
    return (
        <div className='main-header h-[450px]'>
              <div className='text-center py-8'>
                    <div className='flex justify-center items-center'>
                          <img className='w-56' src="/banner-main.png" alt="" />
                    </div>
                    <div className='lg:py-4 py-3 text-3xl text-white font-bold'>
                          <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    </div>
                    <div className='lg:py-4 text-white text-xl font-semibold'>
                          <p>Beyond Boundaries Beyond Limits</p>
                    </div>
                    <div className='lg:py-4 py-4'>
                           <button className='bg-lime-400 outline-offset-4 outline-lime-400 outline rounded-lg font-bold text-xl p-3'>Claim Free Credit</button>
                    </div>
              </div>
        </div>
    );
};
export default Header;