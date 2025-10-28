import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import PatchListPage from './pages/PatchListPage';
import PatchDetailPage from './pages/PatchDetailPage';
import UniformGuidePage from './pages/UniformGuidePage';

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Girl Scout Patch Tracker</h1>
        <nav aria-label="Main navigation">
          <ul className="app__nav-list">
            <li>
              <NavLink to="/patches" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Patches
              </NavLink>
            </li>
            <li>
              <NavLink to="/uniform-guide" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Uniform Guide
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Navigate to="/patches" replace />} />
          <Route path="/patches" element={<PatchListPage />} />
          <Route path="/patches/:id" element={<PatchDetailPage />} />
          <Route path="/uniform-guide" element={<UniformGuidePage />} />
        </Routes>
      </main>
      <footer className="app__footer">
        <p>&copy; {new Date().getFullYear()} Girl Scout Patch Tracker</p>
      </footer>
    </div>
  );
};

export default App;
