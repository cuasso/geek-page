import Header from "./layouts/header";
import Footer from "./layouts/footer";
import PageRoutes from "./routes";
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header />
      < PageRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
