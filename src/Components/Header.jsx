import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className='logo'>
                <img className='w-[360px]' src={logo} alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-gray-500 text-lg '>Journalism Without Fear or Favour</h1>
                <p className='text-lg '>{
                    moment().format("dddd, MMMM Do YYYY")
                }</p>
            </div>
        </div>

    );
};

export default Header;