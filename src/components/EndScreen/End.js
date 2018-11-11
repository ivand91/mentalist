import React from 'react';

import './End.css';

const end = ( props ) => {

    return (

        <section className="end-screen">

            <h2>You think the number:</h2>

            <p>{props.number}</p>
            
        </section>
    )
};

export default end;