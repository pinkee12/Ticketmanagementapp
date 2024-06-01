import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tickets from './pages/Tickets';
import TicketView from './pages/TicketView';
import TicketCreate from './pages/TicketCreate';
import TicketEdit from './pages/TicketEdit';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
    return (
        <ChakraProvider>
            <AuthProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route element={<ProtectedRoute />}>
                        
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/tickets" element={<Tickets />} />
                            <Route path="/tickets/create" element={<TicketCreate />} />
                            <Route path="/tickets/:id" element={<TicketView />} />
                            <Route path="/tickets/:id/edit" element={<TicketEdit />} />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default App;
