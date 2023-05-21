
import Gallery from "./Gallery";
import Toys from "./Toys";


const Home = () => {
    
   
    return (
        <div>
            <img className="w-[100%] h-[500px] mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3M8jQSsSgbzleVZzF2VtWhcGMd6MldnO-Q&usqp=CAU" alt="" />
           <Toys></Toys>
           <Gallery></Gallery>
            
        </div>
    );
};

export default Home;