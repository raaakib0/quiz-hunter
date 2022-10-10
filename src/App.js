import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    path: '/',
    element: header,
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
      <Header></Header>
    </div>
  );
}

export default App;
