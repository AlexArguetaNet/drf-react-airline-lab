import "./Page.css"

function Page({ secondClassName, children }) {

  return (
    <div className={`page ${secondClassName}`}>
        {children}
    </div>
  )
}

export default Page
