import axios from "axios";
import { useState, useEffect } from "react";
import requests from "../Request";

const Main = () => {
  const [peliculas, setPeliculas] = useState([]);

  const pelicula = peliculas[Math.floor(Math.random() * peliculas.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((respuesta) => {
      setPeliculas(respuesta.data.results);
    });
  }, []);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${pelicula?.backdrop_path}`}
          alt={pelicula?.title}
        />
      <div className=' absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className="text-3xl md:5xl font-bold ">{pelicula?.title}</h1>
        <div className='my-4'>
          <button className="border bg-gray-300 text-black border-gray-300 py-1 px-5"> Play</button>
          <button className="border text-white border-gray-300 py-1 px-5 ml-4"> Watch Later</button>
        </div>
        <p className=" text-gray-400 text-sm">Relased: {pelicula?.release_date}</p>
        <p className=" w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{pelicula?.overview}</p>
      </div>
      </div> 
    </div>
  );
};

export default Main;
