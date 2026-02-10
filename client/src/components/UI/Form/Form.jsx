import "./Form.css"

function Form({ title, onSubmit, children }) {

  return (
    <form onSubmit={onSubmit}>
        <h2>{title}</h2>
        {children}
    </form>
  )
}

export default Form
