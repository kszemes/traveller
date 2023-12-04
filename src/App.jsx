import './App.css'
import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import {Background} from "./components/Background.jsx";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Tours} from "./pages/Tours.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {Tour} from "./pages/Tour.jsx";

function App() {

    return (
        <HashRouter basename='/'>
            <div className='content'>
                <Background/>
                <Navbar/>
            </div>
            <Routes>
                <Route path='/traveller' element={<Outlet/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='tours' element={<Tours/>}/>
                    <Route path='tour/:id' element={<Tour/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App