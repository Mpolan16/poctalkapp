import React, { useState, createContext } from 'react';

export const ContextApi = createContext();

// Holds the states info
export const SpecialistsProvider = props => {
    const [specialists, setSpecialists] = useState([
        {
            name: "Pat Ramos",
            nickname: "Pat",
            organization: "bcbs",
            specialty: "family",
            newclients: "yes",
            typeclients: "everyone welcom",
            cost: "1",
            ethnicity: "latino",
            gender: "m",
            date: new Date(new Date().setDate(new Date().getDate() - 7))
        },
        {
            name: "Maria Martinez",
            nickname: "Maria",
            organization: "unh",
            specialty: "individual",
            newclients: "yes",
            typeclients: "adults",
            cost: "2",
            ethnicity: "latina",
            gender: "f",
            date: new Date(new Date().setDate(new Date().getDate() - 7))
        }
    ]);
    // Passes the data in porps 
    return (
        <ContextApi.Provider value={[specialists, setSpecialists]} >
          {props.children} 
        </ContextApi.Provider > 
    );

    // return <ContextApi.Provider value={[specialists, setSpecialists]} {...props} />;
};
    