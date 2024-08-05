import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const IndexPage = () => {
  return (
    <div className="md:pt-4 bg-[#16161a]">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
};

export default IndexPage;
