import { Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MyPage from "./pages/MyPage";
import MyRecord from "./pages/MyRecord";
import Column from "./pages/Column";
import ScrollTop from './assets/icons/icon-scroll.svg'
import './App.scss'

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="app">
      <Header />
      <div className="app-home">
        <Routes>
          <Route path="/" element={<MyPage />}></Route>
          <Route path="/myRecord" element={<MyRecord />}></Route>
          <Route path="/column" element={<Column />}></Route>
        </Routes>
        <div className="app-scroll">
          <img
            src={ScrollTop}
            alt={ScrollTop}
            onClick={scrollToTop}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
