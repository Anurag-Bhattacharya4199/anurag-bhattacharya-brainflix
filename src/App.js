/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the App.js
In this file, the routes for all pages are declared
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

/**
All the Imports needed for this file
 */

//App Styles
import "./App.scss";

//Import Header, HomePage, UploadPage and ErrorPage Page Components
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

//Import BrowserRouter, Routes and Route for Page Routing functionality
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * This function is the main App Function, that returns the container of the full website
 * @returns container of website
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
