import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
import "./index.css"

const Login = lazy(() => import("./views/auth/login"))
const UserRegister = lazy(() => import("./views/auth/userRegister"))
const Home = lazy(() => import("./views/home"))
const NotFoundPage = lazy(() => import("./components/ErrorPage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/user-register",
    element: <UserRegister />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
])
function App() {

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
