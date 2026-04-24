import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './index.css';

function App() {
  const [showCvPreview, setShowCvPreview] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleReviewCv = () => {
    setShowCvPreview(true);
    setTimeout(() => previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About onReviewCv={handleReviewCv} />
      {showCvPreview && (
        <section ref={previewRef} id="cv-preview" className="bg-secondary py-20 px-4">
          <div className="container mx-auto max-w-5xl bg-white rounded-xl border border-border shadow-lg overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-2xl font-semibold text-textPrimary">CV Preview</h3>
              <p className="text-textSecondary mt-2">Review the uploaded resume below.</p>
            </div>
            <div className="h-[80vh] min-h-[480px]">
              <iframe
                src="/MYResume.pdf"
                title="MY Resume Preview"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      )}
      <Experience />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
