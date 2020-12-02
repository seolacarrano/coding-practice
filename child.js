import React from 'react';


export class Child extends React.Component {
  render () {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}

// Pass a Component's State
// A <Parent /> is supposed to pass its state to a <Child />.

// Before a <Parent /> can pass anything to a <Child />, you need to import Child into Parent.js.

// Instructions
// 1.
// To import a local component, we will need to modify our import syntax to use local files and named exports. For example, if we wanted to import a component called ComponentName from a local file called Component.js we would write

// import { ComponentName } from './Component';
// On line 3, import the Child component from Child.js.

// Parent.js and Child.js share the same parent directory.

// Checkpoint 2 Passed

// Stuck? Get a hint
// 2.
// Great! Now Parent is ready to pass its state to a <Child />.

// Inside of Parent‘s .render() method’s return statement, get rid of the <div></div>.

// Replace it with a <Child /> instance.

// Give <Child /> an attribute with a name of name. The attribute’s value should be the name property stored in this.state.

// Checkpoint 3 Passed

// Stuck? Get a hint
// 3.
// All that’s left is to render your components!

// At the bottom of Parent.js, call ReactDOM.render();.

// For ReactDOM.render()‘s first argument, pass in <Parent />.

// For ReactDOM.render‘s second argument, pass in document.getElementById('app').

// Rendering <Parent /> will render both components, because Parent‘s render function returns a <Child />. Click Run, and see the rendered information that you passed down from Parent.