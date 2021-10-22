import Select from "./Select";
import data from "../data/formData";

export default function Form(props) {
  const { options, setOptions, input, setInput, setQuery } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(prev => ({ ...prev, input, options }));
    setInput("");
  }

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onOptionChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOptions({ ...options, [name]: value });
  };

  let menuClass = "form--container";

  if (props.visible) {
    menuClass += " show--menu";
  } else {
    menuClass += " hide--menu";
  }

  return (
    <div className={menuClass}>
      <form onSubmit={submitHandler}>
        <div className="select--wrapper">
          <Select name="diet" data={data.diet} onChange={onOptionChange} />
          <Select name="health" data={data.health} onChange={onOptionChange} />
          <Select name="cuisine" data={data.cuisine} onChange={onOptionChange} />
        </div>
        <input type="text" className="input--text" placeholder="Your choice of food..." value={input} onChange={onInputChange} required />
        <button type="submit" className="form--button">Submit</button>
      </form>
    </div>
  );
}