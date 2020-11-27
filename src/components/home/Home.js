import React from 'react';
import Heading from "../layout/Heading";
import HomeContent from "../layout/HomeContent";

export function Home() {
    return (
        
        <>
        <Heading title = "Title prop"/>
        
        <HomeContent children = "Children prop"/>
        
        </>
    );
}

export default Home;