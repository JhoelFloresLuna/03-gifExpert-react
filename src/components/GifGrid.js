import React from "react";
import { useFetchGifs } from "../hooks/useFecthGifs";
import { GifGidItem } from "./GifGidItem";


export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs(category)
  //console.log(data);
  //console.log(loading);
  

  return (
    <>
      <h1 className="animate__animated animate__fadeInDown">{category}</h1>
      {loading&&<p className="animate__animated animate__flash">Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGidItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
