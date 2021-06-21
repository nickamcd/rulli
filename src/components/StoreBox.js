import StoreItem from "./StoreItem"
import { ItemData } from "./ItemData"

const StoreBox = () => {
  return (
    <div className="store-box">
      { ItemData.map((item, index) => {
        return (
        <StoreItem 
          key={ index } 
          url={ item.url } 
          title={ item.title } 
          description={ item.description } 
        />
        )
      }) }
    </div>
  )
}

export default StoreBox
