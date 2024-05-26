import React, {useEffect} from 'react';
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import {Login, Main, Profile, Register} from "./pages";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    const { toasts } = useToasterStore();

    useEffect(() => {
        toasts
            .filter((t) => t.visible)
            .filter((_, i) => i >= 3)
            .forEach((t) => toast.dismiss(t.id));
    }, [toasts]);
    return (
        <div className="bg">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Toaster />
            </BrowserRouter>
        </div>
    );
}

export default App;
