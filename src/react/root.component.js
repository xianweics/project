import React from 'react';

export default class rootComponent extends React.Component {
  componentDidCatch (error, errorInfo) {
    console.info(error, errorInfo);
  }

  render () {
    return (
      <div className={'content'}>
        <h1>Hello from React</h1>
        <a href="/vue">from vue to vue</a>
      </div>
    );
  }
}