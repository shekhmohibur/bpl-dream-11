import footerLogo from '../assets/images/logo-footer.png'
const Footer = () => {
    return (
        <div className="bg-black md:pt-72">
            <img className="mx-auto" src={footerLogo} alt="Footer Logo" />
            <div className='px-4 sm:px-24 mx-auto grid lg:grid-cols-3 gap-10 pb-10'>
                <div>
                    <h3 className='text-white'>About Us</h3>
                    <p className='text-gray-400'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h3 className='text-white'>Quick Links</h3>
                    <ul className='text-gray-400'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-white'>Subscribe</h3>
                    <p className='text-gray-400'>Subscribe to our newsletter for the latest updates.</p>
                    <div className='flex'>
                        <input className='border-2 py-1 w-40 sm:w-1/2 outline-none px-1 rounded-l-lg' type="email" placeholder='Enter Your Email' />
                        <button className='font-semibold px-3 py-4 rounded-r-lg inset-shadow-sm inset-shadow-slate-600 bg-gradient-to-br from-purple-200 to-orange-500'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-600' />
            <span className='text-gray-500 py-10 block text-center'>@2024 Your Company All Rights Reserved.</span>
        </div>
    );
};

export default Footer;