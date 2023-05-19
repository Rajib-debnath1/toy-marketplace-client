import { useLocation } from "react-router-dom";

const ToyDetails = () => {
    const {state} = useLocation()
    console.log(state,"from details");
    return (
        <div>
            
        </div>
    );
};

export default ToyDetails;