import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
const API_KEY='0qWG5IsAWUPhC4h0MhkiBMoRxoVc9dB2';


const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {


    const [gif, setGif] = useState('');

    const [loading, setLoading] = useState(false);
    
    async function fetchData (tag) {
        setLoading(false);

        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url );
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource);
        // console.log(output);
        setGif(imageSource);
        setLoading(true);
        
    };

    useEffect( () => {
        fetchData('Rohit Sharma');
        // setLoading(true);
    }, [] );


   
    return {gif,loading,fetchData};

 
}

export default useGif;


