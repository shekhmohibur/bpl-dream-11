import bannerShadow from '../assets/images/bg-shadow.png'
import bannerMain from '../assets/images/banner-main.png'
const Hero = ({handleCoins}) => {
    const HandleClaimCoins = () => {
        handleCoins();
    }
    return (
        <div className='bg-black rounded-xl overflow-hidden mt-5 relative'>
            <img src={bannerShadow} alt="bannerShadow" />
            <div className='relative'>
                <img className='w-40 absolute small-banner' src={bannerMain} alt="bannerMain" />
            </div>
            <div className='items-center flex flex-col gap-5 absolute bottom-28 left-40 hero-css'>
                <img className='w-40 small-hidden' src={bannerMain} alt="bannerMain" />
                <h1 className='text-white font-bold md:text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='md:text-2xl text-gray-300'>Beyond Boundaries Beyond Limits</p>
                <span className='p-1 border-2 block w-fit rounded-lg border-lime-300'>
                    <button onClick={HandleClaimCoins} className='bg-lime-200 px-5 py-2 rounded-lg font-bold'>Claim Free Credit</button>
                </span>
            </div>
        </div>
    );
};

export default Hero;