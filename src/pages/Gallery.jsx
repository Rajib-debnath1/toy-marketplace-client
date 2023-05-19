import React from 'react';
import useGetToyData from '../shared/usegetData';
import { mainApi } from '../shared/mainApi';

const Gallery = () => {
    const {data} = useGetToyData(`${mainApi}/allToy`)
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Gallery;