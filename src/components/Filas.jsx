import { useState, useEffect } from "react";
import axios from "axios";

const Filas = ({ titulo, fetchUrl }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setPeliculas(response.data.results);
    });
  }, [fetchUrl]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{titulo}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {peliculas.map((item, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer   relative p-2">

              <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filas;
