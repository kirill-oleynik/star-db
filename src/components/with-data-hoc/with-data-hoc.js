import React, {Component} from 'react';
import Spinner from '../spinner';

const withDataHOC = (View) => {
  return class extends Component{
  state = {
    data: null
  };
  componentDidMount(){
    this.props.getData()
      .then((data)=>{
        this.setState({ data })
      })
  }




    render(){

    const {data} = this.state;
    const{entity} = this.props;
    if(!data){ return <Spinner /> }



    return <View {...this.props} data={data} />;

    };
  };
};
export default withDataHOC;
