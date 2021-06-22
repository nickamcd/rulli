import Location from "../components/Location"
import { LocationData } from "../components/LocationData"

const Locations = () => {
  return (
    <div className="locations page">
      <h1>Locations</h1>
      <div>
        { LocationData.map((location, index) => { 
          return (
            <Location
              key={ index } 
              url={ location.url }
              title={ location.title }
              path={ location.path }
            />
          )
        }) }
      </div>
    </div>
  )
}

export default Locations
