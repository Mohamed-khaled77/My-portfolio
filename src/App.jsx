import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Footer from "@/components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Home />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;