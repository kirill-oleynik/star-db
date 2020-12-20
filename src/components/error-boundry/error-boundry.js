import React, {Component} from 'react';
import './error-boundry.css';
import ErrorIndicator from '../error-indicator';
export default class ErrorBoundry extends  Component{
  state={
    hasError: false
  };
  componentDidCatch(){
    this.setState({ hasError: true });
  }
  render(){
    const {hasError} = this.state;
    return(hasError ? <ErrorIndicator /> : this.props.children);
  };
}
