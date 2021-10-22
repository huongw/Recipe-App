export default function Header(props) {
  const toggle = function () {
    props.toggleMenu()
  }

  return (
    <header>
      <h1>Edamam Food Recipes</h1>
      <span onClick={toggle}><i className="fas fa-angle-double-down fa-2x"></i></span>
    </header>
  );
}