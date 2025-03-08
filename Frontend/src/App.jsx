import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import Brands from "./components/Brands"
import CardGrid from "./components/CardGrid"
import Carousel from "./components/Carousel"
import Chair from "./components/Chair"
import CortinaHome from "./components/CortinaHome"
import Curtains from "./components/Curtains"
import Featured from "./components/Featured"
import Grid from "./components/Grid"
import Hero from "./components/Hero"
import IconGrid from "./components/IconGrid"
import Luggage from "./components/Luggage"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import  Quick  from "./components/Quick"
import Recliner from "./components/Recliner"
import Sofa from "./components/Sofa"
import  Tabs  from "./components/Tabs"
import Video from "./components/Video"

function App() {
  return (
<>
<div className="overflow-x-hidden scrollbar-hidden">
  <Quick/>
<Navbar/>
<Tabs/>
<Hero/>
<IconGrid/>
<Products/>
<CardGrid/>
<Luggage/>
<Carousel/>
<Chair/>
<Video/>
<Curtains/>
<Banner/>
<Sofa/>
<Grid/>
<Recliner/>
<Banner2/>
<Featured/>
<Brands/>

<CortinaHome/>
</div>
</>  
)
}

export default App