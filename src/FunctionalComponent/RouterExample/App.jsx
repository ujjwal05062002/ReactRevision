import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'
import Footer from './Footer'
import Contact from './Contact'
import Profile from './Profile'
import About from './About'
import Error from './Error'

export default function App(){
    return(
        <>
        <BrowserRouter>
            <Navbar />
            <hr />
            <Routes>

                <Route path='/'  element={<Home />} />
                <Route path='/about'  element={<About />} />
                <Route path='/contact'  element={<Contact />} />
                <Route path='/profile/:id/:name/:salary'  element={<Profile />} />
                <Route path='/*'  element={<Error />} />

            </Routes>
            <hr />
            < Footer />
        </BrowserRouter>
    </>
    )
}