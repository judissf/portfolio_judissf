import Header from "./components/Header"
import Message from "./components/Message";
import Provider from "./context";
import Search from "./components/Search";
import Container from "./components/Container";
import Footer from "./components/Footer";
import './App.css'

const App = () => (
  <Provider>
    <Header/>
    <Search/>
    <Container>
      <Message/>
    </Container>
    <Footer/>
  </Provider>
)

export default App;