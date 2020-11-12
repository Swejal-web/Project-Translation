import React from 'react';
import LanguageContext from '../Context/LanguageContext';
import ColorContext from '../Context/ColorContext';

class Button extends React.Component{
    //this is for this.context

    //console.log(this.context);
    /*//static means adding a porperty to Button
    static contextType = LanguageContext;
    //or
    //Button.contextType =  LanguageContext
*/

    renderSubmit(language){
        return(
            language=== 'english' ? 'Submit' : 'Voorjeggen'
        );
    }

//value contains the data inside the context object(pipe) through which data is transfered
    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language})=>this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }
    
                
    render(){
        return (
        <ColorContext.Consumer>
        {(color)=>this.renderButton(color)}
            </ColorContext.Consumer>
      
    );
    }
}



export default Button;