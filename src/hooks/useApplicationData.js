import axios from 'axios';

import { useState, useEffect } from 'react';

const API_ID = '269a9933';
const API_KEY = '03ba669fe958e5e35dccf94e8bc1f4ba';

export default function useApplicationData() {
  const [options, setOptions] = useState({
    diet: "balanced",
    health: "kosher",
    cuisine: "Asian"
  })
  const [input, setInput] = useState("")
  const [recipeList, setRecipeList] = useState([]);
  const [query, setQuery] = useState({
    options,
    input
  })

  // handle form toggle
  const [openMenu, setOpenMenu] = useState(true);
  const toggleMenu = function (state) {
    if (state === undefined) {
      return setOpenMenu(!openMenu);
    }
    setOpenMenu(state);
  }

  useEffect(() => {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query.input}&app_id=${API_ID}&app_key=${API_KEY}&diet=${query.options.diet}&health=${query.options.health}&cuisineType=${query.options.cuisine}`)
      .then((res) => {
        setRecipeList(res.data.hits);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [query]);

  return { options, setOptions, input, setInput, recipeList, setQuery, openMenu, toggleMenu };
}