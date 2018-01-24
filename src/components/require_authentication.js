//HigherOrderComponent
//this component controls logical
//structure of certain features
//in this app.

import React, { Component } from 'react';
import { connect } from 'react-redux';

//parameter is the component
//we wish to wrap
export default function(ComposedComponent){
  class Authentication extends Component{
    static contextTypes = {
      router: React.PropTypes.object
    }

    //primes component to run on
    //the DOM
    componentWillMount(){
      if(!this.props.authenticated){
        this.context.router.push('/');
      }
    }
    //when component will be re-rendered
    componentWillUpdate(nextProps){
      if(!nextProps.authenticated){
        this.context.router.push("/");
      }
    }

    render(){
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state){
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
