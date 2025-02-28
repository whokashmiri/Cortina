import CardGrid from "./components/CardGrid"
import Chair from "./components/Chair"
import Curated from "./components/Curated"
import Curtains from "./components/Curtains"
import Featured from "./components/Featured"
import Hero from "./components/Hero"
import Luggage from "./components/Luggage"
import Navbar from "./components/Navbar"
import Recliner from "./components/Recliner"
import Sofa from "./components/Sofa"
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
<Sofa/>
<Chair/>
<Featured/>
</>  
)
}

export default App