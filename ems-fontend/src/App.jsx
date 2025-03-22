import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeeComponent from './components/ListEmployeeComponent'

function App() {

  return (
    <>
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }} >
    <Header/>
    <div style={{flex:"1"}}>
    <ListEmployeeComponent/>
    </div>
      
      <Footer/>
      </div>
    </>
  )
}

export default App
