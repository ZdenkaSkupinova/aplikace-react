import './style.css';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import Footer from '../../Components/Footer';


export const HomePage = () => {
  return (
    <div className="container">
        <Header />
        <Main />
        <Footer />
    </div>
  );
};
