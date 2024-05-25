import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import MapPage from './components/map';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<HomePage />} />
          <Route path="map" element={<MapPage />} />
          <Route path='create' element={<MapPage/>}/>
        </Route>
        <Route path="login" element={<AuthRootComponent />} />
        <Route path="register" element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
