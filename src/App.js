import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Question from './component/Question/Question';
import Statistics from './component/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), 
          element: <Statistics></Statistics>
        },
        {
          path: '/question/:quizId', 
          loader: (params) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Question></Question>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
