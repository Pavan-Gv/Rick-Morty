import React from 'react';
import './bats.css';

const Bats = () => {
    return (
        <React.Fragment>
            <div className="bat-container">
                {Array.from({ length: 5 }).map((_, index) => (
                    <img
                        key={index}
                        src="src\assets\bats.png"
                        alt="bat"
                        className={`bat bat-${index + 1}`}
                    />
                ))}
            </div>
        </React.Fragment>
    );
};

export default Bats;
