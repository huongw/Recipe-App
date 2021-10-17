export default function Select(props) {
  const { data, name, onChange } = props;

  const optionList = data.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ))

  return (
    <div className="custom--select">
      <select name={name} onChange={onChange}>
        <option></option>
        {optionList}
      </select>
    </div>
  )
}