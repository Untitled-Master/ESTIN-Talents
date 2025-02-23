import Navbar from "./components/Home/Navbar";
import Sidebar from "./components/Home/Sidebar";
import Main from "./components/Main/Main";
  

function App() {
  return (
    <>
      <Navbar />
      <div style={{ 
        display: 'flex',
        marginTop: '64px' // Adjust this value to match your Navbar height
      }}>
        <Sidebar />
        <main >
          <Main />
        </main>
      </div>
    </>
  )
}

export default App
