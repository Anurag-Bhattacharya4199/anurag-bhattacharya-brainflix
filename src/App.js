/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the App JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

/**
All the Imports needed for this file
 */

//App Styles
import React from "react";

import "./App.scss";

import Header from "./components/Header/Header";

import HomePage from "./pages/HomePage/HomePage";

import UploadPage from "./pages/UploadPage/UploadPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * This function is the main App Function, that returns the container of the full website
 * @returns container of website
 */
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/video/:id" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
