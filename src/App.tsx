import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen bg-vampire-black text-white font-sans selection:bg-blood-red selection:text-white relative">
      <div className="fixed inset-0 z-0">
        <MatrixBackground opacity={0.6} />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Portfolio />
        <Pricing />
        <Contact />
      </div>
    </div>
  );
}

export default App;
