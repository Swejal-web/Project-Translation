import React from 'react';

const Context =  React.createContext('english');

export class LanguageStore extends React.Component{
    //this is business logic
    state={language:'english'};

    onLanguageChange=(language)=>{
        this.setState({language});
    }

    render(){

        //the Component must be capital
        //this.props.children means the value of context will be passed to LanguageStore children
        //this is view logic
        return (
            <Context.Provider value={{...this.state,onLanguageChange:this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        );
    }

};

export default Context;