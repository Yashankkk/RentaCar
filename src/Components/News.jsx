import CarNews from "./CarNews";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <section className="h-85 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/167538/pexels-photo-167538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <h1 className="text-white text-4xl md:text-5xl font-bold">Latest News</h1>
      </section>
        <CarNews />
        <Footer />
    </div>
  );
}

export default App;