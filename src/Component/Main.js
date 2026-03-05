    import React from 'react';
    import {Outlet} from 'react-router-dom';
    import ThemeProvider from '../Context/ThemeProvider';

    const Main = () => {
        return(
            <>
                <ThemeProvider>
                    <Outlet/>
                </ThemeProvider>
            </>

        )
    }

    export default Main;
