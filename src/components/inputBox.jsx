//Hello my name is Kunal Please read the comments for better understanding of code
import React from 'react';

const InputBox = ({ handleSearch, searchQuery }) => { // Receive search query and search handler
    return (
        <div>
            <input
                type="text"
                placeholder='Search by name, email or role'
                style={{ width: '100vw', height: "4vh", margin: "5px" }}
                value={searchQuery} // Set the input value to the search query
                onChange={handleSearch} // Call the search handler on input change
            />
        </div>
    );
}

export default InputBox;