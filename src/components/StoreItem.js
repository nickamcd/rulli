const StoreItem = ({url, title, description}) => {
  return (
    <div className="store-item">
      <img src={ url } />
      <h1>{ title }</h1>
      <p>{ description }</p>
      <button>view details</button>
    </div>
  )
}

export default StoreItem
