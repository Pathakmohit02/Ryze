import "./Contact.css";
import Hero from "../components/Hero/Hero";
import FloatingLogos from "../components/FloatingLogos/FloatingLogos";
import OrangeSection from "../components/OrangeSection/OrangeSection";
import ContactUs from "../components/ContactUs/ContactUs";

function Contact() {
    return(
        <>
        <Hero
  titleLine1="GET IN"
  highlightText="TOUCH"
  titleLine2="WITH US"
  subtitle="We'd love to hear from you!"
  showEmail={true}
/>
<FloatingLogos />
<ContactUs />
<OrangeSection />

        </>
    );
}

export default Contact;