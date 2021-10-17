export default function RecipeListItem(props) {
  const { ingredient } = props;

  return (
    <li>{ingredient}</li>
  );
}