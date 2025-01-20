import Fasilitas from "./layouts/Fasilitas";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import Pelaksana from "./layouts/Pelaksana";
import Sekilas from "./layouts/Sekilas";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Sekilas />
      <Fasilitas />
      <Pelaksana />
    </>
  );
};

export default App;
