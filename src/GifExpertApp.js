import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//import PropTypes from 'prop-types'

const GifExpertApp = () => {
//   const categories = ["One Punch", "Samurai X", "Goku"];
  const [categories, setCategories] = useState(["One Punch"])

 // const handleAdd = () => {
    //setCategories([...categories, 'Hola']) //usando operador spreed 
    //setCategories(categories.concat('Manzana')) //utilizado método de concat
    //setCategories(cats =>[...cats, 'Hunter']) //utilizado callback
 // }
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      
      <ol>
        {categories.map((category) => <GifGrid key={category} category={category}/>)}
      </ol>
    </>
  );
};

// GifExpertApp.propTypes = {};

export default GifExpertApp;
