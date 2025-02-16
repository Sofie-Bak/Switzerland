import IntroSection from "../components/introSection/IntroSection";
import MountainHeight from "../components/mountainHeight/MountainHeight";
import Navigation from "../components/Navigation";
import PageHeader from "../components/pageHeader/PageHeader";
import ViewsSection from "../components/viewsSection/ViewsSection";


const Home = () => {
    return (
        <article>
            <Navigation/>
            <PageHeader/>
            <ViewsSection/>
            <IntroSection/>
            <MountainHeight/>
        </article>
    );
}

export default Home;