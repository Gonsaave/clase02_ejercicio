import SectionPrincipal from '../../components/section-principal/SectionPrincipal.jsx';
import SectionSecondary from '../../components/section-secondary/SectionSecondary.jsx';

const Home = () => {

    return (
        <>
            <div className="row">
                <div className="col-12">
                <SectionPrincipal/>
                </div>
            </div>
            <hr class="bg-danger border-2 border-top border-danger"></hr>
            <div className="row">
                <div className="col-12">
                <SectionSecondary/>
                </div>
            </div>
        </>
    );
}

export default Home