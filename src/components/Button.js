import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

// Two ways of getting information out of context object
// If consuming information from a single object, can set up this.context property
// otherwise if want to consume multiple different context values, make use of consumer



//Consumer approach: another way to get data from context object
// always provide one child to it - always going to be a function
// function automatically called by the Consumer
// and is called with whatever value is currently inside our pipe
// value is first argument
class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(colour) {
    return(
      <button className={`ui button ${colour}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    //Consumer can only have one child - a function so the jsx has to be returned within
    return(
      <ColourContext.Consumer>
        {(colour) => this.renderButton(colour)}
      </ColourContext.Consumer>
    )
  }
}

export default Button;




//Using this.context approach:

// class Button extends React.Component {
//   static contextType = LanguageContext; //To hook up context object to class component
//   //static contextType effectively adds a property to our class itself (rather than instance of the class)
//   // could also be written as Button.contextType = LanguageContext after creating class

//   render() {
//     const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
    
//     return(
//       <button className="ui button primary">{text}</button>
//     )
//   }
// }

// export default Button;