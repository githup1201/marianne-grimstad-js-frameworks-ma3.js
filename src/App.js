import React from "react";
import Heading from "./components/layout/Heading";
import HomeContent from "./components/layout/HomeContent";
import LoginForm from "./components/layout/LoginForm";
import NewsList from "./components/layout/NewsList";
import Layout from "./components/layout/Layout";
import ErrorMessage from "./components/layout/ErrorMessage";
import './App.css';


function App() {
    return (
        <Layout>
        
          <Heading />
          
          <HomeContent />
        
          <NewsList />
        
          <LoginForm />
          <ErrorMessage />
         
        </Layout>
    );
}

export default App;


