import tpBg from '../assets/images/bg-shadow.png'
const Subscription = () => {
    return (
        <div className="items-center text-center relative md:mx-w-7xl mx-auto mt-40 md:-mb-64">
            <span className='border border-white block w-fit mx-auto rounded-lg p-2'>
                <img className="rounded-lg bg-white" src={tpBg} />
            </span>
            <div className='absolute hero-css flex flex-col gap-5'>
                <h3 className='font-bold md:text-3xl'>Subscribe to our Newsletter</h3>
                <p className='text-gray-500'>Get the latest updates and news right in your inbox!</p>
                <div className='flex justify-center gap-4'>
                    <input className='border-2 py-4 outline-none px-1 rounded-lg md:w-72' type="email" placeholder='Enter Your Email' />
                    <button className='font-semibold px-3 py-4 rounded-lg inset-shadow-sm inset-shadow-slate-600 bg-gradient-to-br from-purple-200 to-orange-500'>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Subscription;