import Hero from "../components/Hero/Hero";
import FloatingLogos from "../components/FloatingLogos/FloatingLogos"; 
import OrangeSection from "../components/OrangeSection/OrangeSection";
import Articles from "../components/Articles/Articles";
import BlogSection from "../components/BlogSection/BlogSection";


const CaseStudies = () => {
  return (  
    <>
    <Hero
  titleLine1="REAL"
  highlightText="RESULTS"
  titleLine2="WITH RYZE"
  subtitle="See how teams grow faster using AI-driven marketing"
  showEmail={true}
/>
<FloatingLogos />
<Articles />
<BlogSection />
<OrangeSection />


    </>
  );
};

export default CaseStudies;
