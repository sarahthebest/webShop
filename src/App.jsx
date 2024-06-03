import 'tailwindcss/base.css';
import './assets/styling/output.css';
import Navbar from './screens/common/Navbar';
import Home from './screens/Home';
import NotificationBar from './screens/common/NotificationBar';
import Footer from './screens/common/Footer';

function App() {
  return (
    <>
      <NotificationBar />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
