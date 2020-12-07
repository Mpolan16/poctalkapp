import React from 'react';

function Searchbar() {
    return (
        <>
            <input placeholder="search"/>
            {/* here i need to create what i will do when something is put into the searchbar to weed through the mongo data I have provided */}
            
            {/* after they click search, we take what they entered in the search bar */}

            {/* then we do a .find() for mongo that searches anything that includes the words they had */}

            {/* if it appears in the search organize it in some type of order? not sure if most recently entered-date, or alapha order, not sure */}

            {/* if it does not appear, then we send "0 items found in your search" message */}
        </>
    );
}

export default Searchbar;