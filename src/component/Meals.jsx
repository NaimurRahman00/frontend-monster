import axios from "axios";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);



  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div style={{border: '1px solid gray', padding: '3px', borderRadius: '5px', width: '220px', margin: '10px'}}>
        <img style={{width: '100%'}} src={strMealThumb} alt={strMeal} />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </div>
      </div>
    );
  });

  return <section style={{display: 'flex', flexWrap: 'wrap'}}>{itemList}</section>;
};

export default Meals;
