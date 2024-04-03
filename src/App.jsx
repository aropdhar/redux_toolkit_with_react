import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Rootlayout from "./layout/Rootlayout";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route element={<Rootlayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
       </Route>
    )
  );

  return ( <RouterProvider router={router} />)
}

export default App
