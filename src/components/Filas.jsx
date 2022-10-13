import { useState, useEffect } from "react";
import axios from "axios";
import Peliculas from "./Peliculas";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Filas = ({ titulo, fetchUrl, filasId }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setPeliculas(response.data.results);
    });
  }, [fetchUrl]);

  const sliderLeft = () =>{
    var slider = document.getElementById('slider'+ filasId );
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const sliderRigth = () =>{
    var slider = document.getElementById('slider'+ filasId );
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{titulo}</h2>
      <div className="relative flex items-center group">
      <MdChevronLeft 
        onClick={sliderLeft}
        className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={35}/>
        <div
          id={'slider' + filasId }
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {peliculas.map((item, id) => (
            <Peliculas key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRigth}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={35}/>
      </div>
    </>
  );
};

export default Filas;
