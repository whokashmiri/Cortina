import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import CardGrid from "./components/CardGrid"
import Carousel from "./components/Carousel"
import Chair from "./components/Chair"
import CortinaHome from "./components/CortinaHome"
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
<div className="overflow-x-hidden">
<Navbar/>
<Tabs/>
<Hero/>
{/* <Curated/> */}
<IconGrid/>
<CardGrid/>
<Luggage/>
<Carousel/>
<Chair/>
<Curtains/>
<Banner/>
<Sofa/>
<Recliner/>
<Banner2/>
<Featured/>

<CortinaHome/>
</div>
</>  
)
}

export default App