import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Sidebar from "./components/Home/Sidebar";
import Main from "./components/Main/Main";
import NotFound from "./pages/NotFound";
import NotificationPage from "./pages/NotificationPage";
import Account from "./pages/Account";
import Modules from "./pages/modules";
import Calendar from "./pages/Calendrier";  

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ 
        display: 'flex',
        marginTop: '64px' // Adjust this value to match your Navbar height
      }}>
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Main />} />
            {/* Add more routes here */}
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/programs" element={<div>Programs Page</div>} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
