import React from 'react';
import UserCreate from './Usercreate';
import LanguageContext from '../Context/LanguageContext'; 
import ColorContext from '../Context/ColorContext';

class App extends React.Component{

    state={language:'english'};

    onLanguageChange=(language)=>{
        this.setState({language});
    };

    render(){

        //value is a special property name in Provider
    return (
            <div className="ui contiainer">
                <div>
                    Select a language:
                    <i 
                    onClick={()=>this.onLanguageChange('english')}
                    className="flag us" />
                    <i 
                    onClick={()=>this.onLanguageChange('dutch')}
                    className="flag nl" />
                </div>
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>    
            </div>
    );

    };
}
export default App;
