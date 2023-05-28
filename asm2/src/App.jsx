import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Container from './components/Container';
import ContainerCard from './components/ContainerCard';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <div className="w-100 d-flex justify-content-center" style={{"background": "#f4f5f6"}}>
        <Container /> 
      </div>
      <ContainerCard />
      <Footer/>
    </>
  )
}

export default App
