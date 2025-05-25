import CarNews from "./CarNews";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <h1 className="text-2xl font-bold text-center !mt-6">Latest Car News</h1>
        <CarNews />
        <Footer />
    </div>
  );
}

export default App;