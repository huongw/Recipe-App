import RecipeListItem from "./RecipeListItem";

export default function Recipe(props) {
  const { title, image, ingredients, calories } = props;

  const recipes = ingredients.map((ingredient, index) => {
    return <RecipeListItem
      key={index}
      ingredient={ingredient}
    />
  })

  return (
    <div className="recipe--container">
      <h2 className="title">{title}</h2>
      <img src={image} alt="" />
      <span><b>Calories:</b> {calories.toFixed(0)}</span>
      <h3>Ingredients</h3>
      <ul>{recipes}</ul>
    </div>
  );
}
