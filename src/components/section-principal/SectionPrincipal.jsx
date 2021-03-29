import './SectionPrincipal.css'
import ContactForm from '../contact-form/ContactForm'

const SectionPrincipal = () => {
    const sectionTitle = 'Sección Principal'

    return (
        <div id="section-principal" className="container-fluid">
            <p>{sectionTitle}</p>
            <ContactForm/>
        </div>
    );
}

export default SectionPrincipal