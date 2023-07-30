import { lazy, useEffect } from "react";
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

const AuthLayout = lazy(() => import("./Layouts/Auth"));
const MainLayout = lazy(() => import("./Layouts/Main"));

const Login = lazy(() => import("./Pages/Login"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Page1 = lazy(() => import("./Pages/Page1"));
const Page2 = lazy(() => import("./Pages/Page2"));
const Page3 = lazy(() => import("./Pages/Page3"));
const Page4 = lazy(() => import("./Pages/Page4"));
const Page5 = lazy(() => import("./Pages/Page5"));
const Page6 = lazy(() => import("./Pages/Page6"));
const Page7 = lazy(() => import("./Pages/Page7"));
const Page8 = lazy(() => import("./Pages/Page8"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname !== "/auth/login" &&
      localStorage.getItem("auth") !== "logged"
    ) {
      navigate("/auth/login");
    }
  }, [location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="page4" element={<Page4 />} />
        <Route path="page5" element={<Page5 />} />
        <Route path="page6" element={<Page6 />} />
        <Route path="page7" element={<Page7 />} />
        <Route path="page8" element={<Page8 />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
