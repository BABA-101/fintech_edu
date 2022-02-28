import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListComponent from "./components/ListComponent";
import HeaderWhite from "./components/HeaderWhite";
import Welcome from "./components/Welcome";
import AxiosTest from "./pages/AxiosTest";
import NewsApiPage from "./pages/NewsApiPage"
import AuthPage from "./pages/AuthPage";
import AuthResult from "./pages/AuthResult";
import MainPage from "./pages/MainPage"
import BalancePage from "./pages/BalancePage";
import QrCodePage from "./pages/QrCodePage";
import QRCodeReader from "./pages/QrCodeReadPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ListComponent />}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
      <Routes>
        <Route path="/axiostest" element={<AxiosTest />}></Route>
      </Routes>
      <Routes>
        <Route path="/newsapipage" element={<NewsApiPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/authResult" element={<AuthResult />}></Route>
      </Routes>
      <Routes>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/balance" element={<BalancePage />}></Route>
      </Routes>
      <Routes>
        <Route path="/qr" element={<QrCodePage />}></Route>
      </Routes>
      <Routes>
        <Route path="/QRreader" element={<QRCodeReader />}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;