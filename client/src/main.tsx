import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Lobby from './Pages/Lobby/Lobby';
import Solo from './Pages/Solo/Solo';
import { Layout } from './Layout/Layout';
import * as io from 'socket.io-client';
import { ContextProvider } from './store/Provider';
import { ErrorBoundary } from './Components/ErrorBoundry/ErrorBoundry';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);

const socket = io.connect('http://localhost:8080');
// const socket = io.connect('https://tetricore.onrender.com');

function Main(): JSX.Element {
  return (
    <Routes>
      <Route index element={<Home socket={socket} />} />
      <Route path="lobby/:roomId" element={<Lobby socket={socket} />} />
      <Route path="solo" element={<Solo socket={socket} />} />
    </Routes>
  );
}

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Layout Component={Main}></Layout>} />;
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ErrorBoundary>
  );
}
