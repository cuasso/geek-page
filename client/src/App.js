import Header from "./layouts/header";
import Footer from "./layouts/footer";
import PageRoutes from "./routes";
import { BrowserRouter } from 'react-router-dom'

import { UserProvider } from "./stores/user/user-context";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <PageRoutes />
        <Footer />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;
