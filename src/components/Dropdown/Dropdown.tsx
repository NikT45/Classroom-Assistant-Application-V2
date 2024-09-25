import React, { useState } from 'react';

function Dropdown() {
    // State to hold the selected value
    const [selectedValue, setSelectedValue] = useState('');

    // Function to handle when the value changes, with TypeScript type for the event
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <select value={selectedValue} onChange={handleChange}>
                <option value="">Select an existing year group</option>
                <option value="option1">Get option from db</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            {selectedValue && <p>Selected: {selectedValue}</p>}
        </div>
    );
}

export default Dropdown;
