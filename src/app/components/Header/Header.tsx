import React from 'react';

export const Header = (props) => {
    return (
        <>
            <div style={{ height: props?.height }}>
                {'This is the header'}
            </div>
        </>
    );
}