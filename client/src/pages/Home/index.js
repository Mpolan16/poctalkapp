import React, { useState, useContext } from "react";
import Searchbar from '../../components/Searchbar';
import Button from '../../components/Button';

import { ContextApi } from '../../util/ContextApi.js';

function Home() {
    const [specialists, setSpecialists] = useContext(ContextApi);

    return (
        <>
            <Searchbar />
            <Button />
            {/* state control test */}
            {specialists.map(specialty =>
                <h1  
                key={specialty.id} 
                >  
               {specialty.name}
                </h1>
            )}
        </>
    );
}

export default Home;
