import 'tailwindcss/base.css';
import './assets/styling/output.css';
import Navbar from './screens/common/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline mx-4">Hello world!</h1>
      <div className="bg-blue-500 text-white">Hello, Tailwind CSS!</div>
    </>
  );
}

export default App;
