import {useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllDogs from "./AllDogs.jsx";
import NewDog from "./NewDog.jsx";
import EditDog from "./EditDog.jsx";

//import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<AllDogs/>}></Route>
                    <Route path="/new" element={<NewDog/>}></Route>
                    <Route path="/edit/:id" element={<EditDog/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
