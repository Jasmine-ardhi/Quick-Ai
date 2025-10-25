import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Layout from "./pages/Layout.jsx";
// import GenerateImages from "./pages/GenerateImages.jsx";
import RemoveBackground from "./components/pages/RemoveBackground";
import RemoveObject from "./components/pages/RemoveObject";
import ReviewResume from "./components/pages/ReviewResume";
import Community from "./components/pages/Community";
import Home from "./components/pages/Home.jsx";
import Layout from "./components/pages/Layout.jsx";
import GenerateImages from "./components/pages/GenerateImages.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import WriteArticle from "./components/pages/WriteArticle.jsx";
import BlogTitles from "./components/pages/BlogTitles.jsx";
import { useAuth } from "@clerk/clerk-react";
import {Toaster} from 'react-hot-toast'


const App = () => {

  // const {getToken} = useAuth()
  // useEffect(() => {
  //   getToken().then((token) => console.log(token));
  // }, []); //For testing API's

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard/>} />
          <Route path="write-article" element={<WriteArticle/>} />
          <Route path="blog-titles" element={<BlogTitles/>} />
          <Route path="generate-images" element={<GenerateImages/>} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
