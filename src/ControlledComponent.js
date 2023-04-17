import React, { useState } from "react";

const ControlledComponent = () => {
  const [value, setValue] = useState({
    input1: "",
    textArea1: "",
    select1: "",
    checkBox1: false,
    radioButton: "",
  });

  const handleChange = ({ target }) => {
    // * Solution 1 - using the spread operator
    setValue({
      ...value,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
    /* Solution 2 - using a function and passing the state as a parameter
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
    */
  };
  console.log(value);

  return (
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input
        type="text"
        name="input1"
        value={value.input1}
        onChange={handleChange}
      />

      <textarea
        name="textArea1"
        value={value.textArea1}
        onChange={handleChange}
      />

      <select name="select1" value={value.select1} onChange={handleChange}>
        <option value="">-- Seleccione -- </option>
        <option value="chanchoFeliz">Chancho Feliz</option>
        <option value="chanchitoFeliz">Chanchito Feliz</option>
        <option value="chanchitoTriste">Chanchito Triste</option>
        <option value="Felipe">Felipe</option>
      </select>

      <input
        type="checkbox"
        name="checkBox1"
        onChange={handleChange}
        checked={value.checkBox1}
      />

      <div>
        <label>Chancho: </label>
        <input
          onChange={handleChange}
          type="radio"
          value="feliz"
          name="radioButton"
          checked={value.radioButton === "feliz"}
        />{" "}
        Feliz
        <input
          onChange={handleChange}
          type="radio"
          value="triste"
          name="radioButton"
          checked={value.radioButton === "triste"}
        />{" "}
        Triste
        <input
          onChange={handleChange}
          type="radio"
          value="felipe"
          name="radioButton"
          checked={value.radioButton === "felipe"}
        />{" "}
        Felipe
      </div>
    </div>
  );
};

export default ControlledComponent;
