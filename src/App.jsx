import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Footer from "./Layout/Footer"
import Navbar from "./Layout/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Pages from "./pages/Pages"
import Contact from "./pages/Contact"
import BookTable from "./Components/BookTable"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import AdminPanel from "./pages/AdminPanel"
import AdminProtectedRoute from "./pages/AdminProtectedRoute"


function Layout() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div style={{ marginTop: isAdminRoute ? "0px" : "120px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminProtectedRoute>
              <AdminPanel />
            </AdminProtectedRoute>
          } />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}

    </>
  )
}


function App() {

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>

    </>
  )
}

export default App
