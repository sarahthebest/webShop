import Campaign from "./startpage/Campaign";
import Carousel from "./startpage/Carousel";
import GridContainer from "./startpage/Categories";
import Header from "./startpage/Header";

const Home = () => {
    return ( 
        <>
        <Header />
        <GridContainer />
        <Carousel />
        <Campaign />
        </>
    )
}
 
export default Home;