import React from 'react'
import "../useContextExtraAdvance.css";
import Header from './Header'
import Main from './Main'
import ThemeProvider from './Context/ThemeContext';

const UseContextExtraAdvance = (props) => {
	return(
        <React.Fragment>
            <ThemeProvider>
                <Header/>
                <Main/>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default UseContextExtraAdvance