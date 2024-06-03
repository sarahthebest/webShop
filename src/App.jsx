import 'tailwindcss/base.css';
import './assets/styling/output.css';
import Navbar from './screens/common/Navbar';
import Header from './screens/startpage/Header';
import NotificationBar from './screens/common/NotificationBar';
import Carousel from './screens/startpage/Carousel';
import GridContainer from './screens/startpage/Categories';
import Footer from './screens/common/Footer';

function App() {
  return (
    <>
      <NotificationBar />
      <Navbar />
      <Header />
      <GridContainer />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
