import Form from './components/Form';
import RecipeList from './components/RecipeList';
import useApplicationData from './hooks/useApplicationData';
import Header from './components/Header';

import { useEffect } from "react";

function App() {
  const { options, setOptions, input, setInput, recipeList, setQuery, openMenu, toggleMenu } = useApplicationData();

  const recipes = recipeList.map((r) => {
    return <RecipeList
      title={r.recipe.label}
      image={r.recipe.image}
      ingredients={r.recipe.ingredientLines}
      calories={r.recipe.calories}
    />
  })

  useEffect(() => {

    const handleScroll = function () {

      if (window.scrollY > 0) {
        return toggleMenu(false)
      }
      toggleMenu(true)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="App">
      <div className="fix--header">
        <Header toggleMenu={toggleMenu} />
        <Form
          options={options}
          setOptions={setOptions}
          input={input}
          setInput={setInput}
          setQuery={setQuery}
          visible={openMenu}
        />
      </div>
      {recipes}
    </div>
  );
}

export default App;
