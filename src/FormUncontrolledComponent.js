// form uncontrolled component - basic example
function FormUncontrolledComponent() {
  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target)) // Here we get the data from the form, and store as an Array
    console.log(Object.fromEntries(data)) // Here we just simple display the Array information
  }
  return (
      // * onSubmit will trigger the 'submit' function
      <form onSubmit={submit}>
      <div className="App">
        <span>lala</span>
        <input name='campo' />
      </div>
      <input name='campo2' />
      <input type="file" name='archivo'/>
      <input type='submit' value='Enviar' />
    </form>
  );
}

export default FormUncontrolledComponent;
