import { NavLink, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <NavLink to="/" className="logo">
          Movie Explorer
        </NavLink>

        <nav>
          <NavLink to="/">Ana Sayfa</NavLink>
          <NavLink to="/favorites">Favoriler</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}
