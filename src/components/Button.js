import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext; //To hook up context object to class component
  //static contextType effectively adds a property to our class itself (rather than instance of the class)
  // could also be written as Button.contextType = LanguageContext after creating class

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
    
    return(
      <button className="ui button primary">{text}</button>
    )
  }
}

export default Button;