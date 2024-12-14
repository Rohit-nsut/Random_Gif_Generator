import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks.js/useGif';

const API_KEY='0qWG5IsAWUPhC4h0MhkiBMoRxoVc9dB2';


function Random () {

//   const [gif, setGif] = useState('');

//   const [loading, setLoading] = useState(false);
  
//   async function fetchData () {
//     setLoading(false);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

//     const {data} = await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     console.log(imageSource);
//     // console.log(output);
//     setGif(imageSource);
//     setLoading(true);
    
//   }

//   useEffect( () => {
//     fetchData();
//     // setLoading(true);
//   }, [])

//   function clickHandler() {
//     // setLoading(false);
//     fetchData();
//     // setLoading(true);
//   }

    const {gif, loading, fetchData} = useGif();




  return (
    <div className='lg:w-1/2 md:w-2/3 w-10/12 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-5 '>
    
        <h1 className=' text-xl md:text-2xl font-bold uppercase underline'>A Random gif</h1>
        
        {
            loading ? (<img src={gif} width="450" /> ): (<Spinner />)
        }

        <button className='w-10/12 py-2 bg-white
        bg-opacity-75 rounded-lg text-lg uppercase font-bold mb-5' onClick={() => fetchData()}>generate</button>
        
    </div>
  )
}

export default Random;
