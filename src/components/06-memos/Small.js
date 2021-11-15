import React, { memo } from 'react';

export const Small = memo(({value}) => {

    console.log("Show");

    return (
        <small>
            {value}
        </small>
    )
})
