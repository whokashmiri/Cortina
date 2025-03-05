import CardGrid from "./components/CardGrid"
import Carousel from "./components/Carousel"
import Chair from "./components/Chair"
import CortinaHome from "./components/CortinaHome"
import Curated from "./components/Curated"
import Curtains from "./components/Curtains"
import Featured from "./components/Featured"
import Hero from "./components/Hero"
import IconGrid from "./components/IconGrid"
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
<Carousel/>
<Chair/>
<Featured/>

{/* <Luggage/>
<Recliner/>
<Sofa/>


<IconGrid/>

<CortinaHome/> */}
</>  
)
}

export default App