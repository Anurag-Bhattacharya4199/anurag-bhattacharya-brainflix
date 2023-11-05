/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the App.JS File
In this file, 3 Routes are created:
- A Home page to show the details of the base video
- A Upload page
- A Video details base with the provided video ID
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
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
