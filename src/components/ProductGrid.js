import { ProductData } from "./ProductData"

const ProductGrid = () => {
  return (
    <div className="product-grid">
      { ProductData.map((product, index) => {
        return (
          <div className={ product.className }>
            <img src={ product.url }/>
          </div>
        )
      }) }
    </div>
  )
}

export default ProductGrid
