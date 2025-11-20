import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Story from './components/Story';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero with Spline 3D bottles */}
      <Hero />

      {/* Product grid */}
      <Collections />

      {/* Brand story */}
      <Story />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Éclat Parfums. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;