import ContactHero from "../components/contactPage/contactHero.tsx";
import ContactForm from "../components/contactPage/contactForm.tsx";

function ContactPage() {
    return (
        <div className="Contact">
            <ContactHero />
            <ContactForm />
        </div>
    );
}

export default ContactPage;