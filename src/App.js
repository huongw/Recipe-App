import Form from './components/Form';
import RecipeList from './components/RecipeList';
import useApplicationData from './hooks/useApplicationData';
import Header from './components/Header';

function App() {
  const { options, setOptions, input, setInput, recipeList, setQuery } = useApplicationData();

  const recipes = recipeList.map((r) => {
    return <RecipeList
      title={r.recipe.label}
      image={r.recipe.image}
      ingredients={r.recipe.ingredientLines}
      calories={r.recipe.calories}
    />
  })

  return (
    <div className="App">
      <div className="fix--header">
        <Header />
        <Form
          options={options}
          setOptions={setOptions}
          input={input}
          setInput={setInput}
          setQuery={setQuery}
        />
      </div>
      {recipes}
    </div>
  );
}

export default App;
