import React from 'react'
import GlobalStyle from './globalStyles';
import Header from './header';
import Content from './content';

/** App has two parts
 *  Header component consists of Top navigation bar (total self designed componented no API used)
 *  Content component consists of listing of the issues (API Calling)
 */
const App = () => {
    return(
    <>
        <GlobalStyle/>
        <Header/>
        <Content/>
    </>)
}

export default App;