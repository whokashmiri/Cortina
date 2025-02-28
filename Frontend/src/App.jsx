import CardGrid from "./components/CardGrid"
import Curated from "./components/Curated"
import Curtains from "./components/Curtains"
import Hero from "./components/Hero"
import Luggage from "./components/Luggage"
import Navbar from "./components/Navbar"
import Recliner from "./components/Recliner"
import  Tabs  from "./components/Tabs"

function App() {
  return (
<>
<Navbar/>
<Tabs/>
<Hero/>
<Curated/>
<CardGrid/>
<Curtains/>
<Luggage/>
<Recliner/>
</>  
)
}

export default App