import React from 'react';
import UserCreate from './Usercreate';
import {LanguageStore} from '../Context/LanguageContext'; 
import ColorContext from '../Context/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component{


    render(){

        //value is a special property name in Provider
    return (
            <div className="ui contiainer">
            <LanguageStore>
              <LanguageSelector />
                <ColorContext.Provider value="red">                   
                        <UserCreate />
                 </ColorContext.Provider>   
             </LanguageStore> 
            </div>
    );

    };
}
export default App;
