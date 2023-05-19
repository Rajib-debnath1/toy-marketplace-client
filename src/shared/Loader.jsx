
import loaderImg from '../assets/icons/square-loader.gif'
const Loader = () => {
    return (
        <div className='w-auto mx-auto'>
            <img src={loaderImg} className='h-[150px] w-[150px] mx-auto'  alt="" />
        </div>
    );
};

export default Loader;