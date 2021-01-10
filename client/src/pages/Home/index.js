import React, { useState, useContext } from "react";
import Searchbar from '../../components/Searchbar';
import Button from '../../components/Button';

import { ContextApi } from '../../util/ContextApi.js';

function Home() {
    const [specialists, setSpecialists] = useContext(ContextApi);

    // make api call based on on click search
    
    // set state 

    // print out cards 

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
