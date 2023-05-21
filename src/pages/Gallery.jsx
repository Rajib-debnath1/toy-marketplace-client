import useGetToyData from '../shared/usegetData';
import { mainApi } from '../shared/mainApi';
import useTitleRoutes from '../shared/hooks/useTittle';
import Loader from '../shared/Loader';

const Gallery = () => {
  useTitleRoutes("Gallery")
    const {data} = useGetToyData(`${mainApi}/allToy`)
    // console.log(data);
    return (
      <div className='my-3 bg-slate-200'>
        <h1 className="text-2xl font-bold my-5 text-center">Our Collections Gallery</h1>
        {data?.length < 2 && <Loader></Loader>}
          <div className="grid  md:grid-cols-3 gap-4">
           {
            data?.map(item =>{
              return  <img src={item?.img} alt=""key={item?.img} />
            })
           }
        </div>
      </div>
    );
};

export default Gallery;