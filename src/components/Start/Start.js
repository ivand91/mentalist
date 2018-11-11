import React from 'react';

import './Start.css';

const start = ( props ) => {

    return (

        <section className="start-screen">

            <h2>Mentalist</h2>
            <p>Think an integer between 1 and 100 and application will guess your number in 7 attempts.</p>
            <p>You will see different series of integers. If your number is in a row of numbers press 
                button YES, otherwise press button NO.</p>
            <p>Please, be honest.</p>
            <button className="btn-start">START THE MENTALIST</button>
            
        </section>
    )
};

export default start;