import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import Banner3 from "./components/Banner3"
import Brands from "./components/Brands"
// import CardGrid from "./components/CardGrid"
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
import TagLine from "./components/TagLine"
import Video from "./components/Video"
import Arrow from "./components/Arrow"

function App() {
  return (
<>
<div className="overflow-x-hidden scrollbar-hidden">
  <Quick/>
  <TagLine/>
  <Arrow/>
<Navbar/>
<Tabs/>
<Hero/>
<IconGrid/>
<Video/>

<Products/>
{/* <CardGrid/> */}
<Luggage/>
<Carousel/>
<Chair/>
<Banner2/>

<Curtains/>
<Banner/>
<Sofa/>

<Grid/>
<Recliner/>
<Banner3/>
<Featured/>
<Brands/>

<CortinaHome/>
</div>
</>  
)
}

export default App