import 'tailwindcss/base.css';
import './assets/styling/output.css';
import Navbar from './screens/common/Navbar';
import Header from './screens/startpage/Header';
import NotificationBar from './screens/common/NotificationBar';
import Carousel from './screens/startpage/Carousel';

function App() {
  return (
    <>
      <NotificationBar />
      <Navbar />
      <Header />
      <Carousel />
    </>
  );
}

export default App;
