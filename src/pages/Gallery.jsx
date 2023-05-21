import useGetToyData from '../shared/usegetData';
import { mainApi } from '../shared/mainApi';

const Gallery = () => {
    const {data} = useGetToyData(`${mainApi}/allToy`)
    console.log(data);
    return (
      <div>
        <h1 className="text-2xl font-bold my-4 text-center">Our Collections Gallery</h1>
          <div className="grid grid-cols-3 gap-4">
            <img src="https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-81053.jpg?size=626&ext=jpg&ga=GA1.1.1371786472.1680197785&semt=ais" alt="" />
            <img src="https://img.freepik.com/free-vector/flat-design-christmas-toys-background_52683-52644.jpg?size=626&ext=jpg&ga=GA1.1.1371786472.1680197785&semt=ais" alt="" />
            <img src="https://img.freepik.com/free-vector/boy-riding-bumper-car-cartoon_1308-111020.jpg?size=626&ext=jpg&ga=GA1.2.1371786472.1680197785&semt=ais" alt="" />
            <img src="https://img.freepik.com/free-photo/red-car-with-christmas-ball-top_1252-296.jpg?size=626&ext=jpg&ga=GA1.2.1371786472.1680197785&semt=ais" alt="" />
            <img src="https://img.freepik.com/free-photo/colorful-car-toys_1194-2341.jpg?size=626&ext=jpg&ga=GA1.2.1371786472.1680197785&semt=ais" alt="" />
            <img src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?size=626&ext=jpg&ga=GA1.2.1371786472.1680197785&semt=ais" alt="" />
        </div>
      </div>
    );
};

export default Gallery;