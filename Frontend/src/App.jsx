import CardGrid from "./components/CardGrid"
import Curated from "./components/Curated"
import Curtains from "./components/Curtains"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
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
</>  
)
}

export default App