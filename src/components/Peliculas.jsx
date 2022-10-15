import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

const Peliculas = ({ item, id }) => {
  const [like, setLike] = useState(false);
  const [guardar, setGuardar] = useState(false)
  const {user} = UserAuth()

  const peliculaId = doc(db, 'users' , `${user?.email}`)

  const guardarPelicula = async () =>{
    if(user?.email){
      setLike(!like)
      setGuardar(true)
      await updateDoc(peliculaId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    }else{
      alert('error')
    }
  }
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer   relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 w-full h-full hover:bg-black/80 opacity-0            hover:opacity-100 text-white">
        <p className="flex justify-center items-center h-full text-center white-space-normal text-xs md:text-sm font-bold ">
          {item?.title}
        </p>

        <p onClick={guardarPelicula}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Peliculas;
