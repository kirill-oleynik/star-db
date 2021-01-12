import React, {Component} from 'react';
import Spinner from '../spinner';

const withDataHOC = (View, getData) => {
  return class extends Component{
  state = {
    data: null
  };
  componentDidMount(){
    getData()
      .then((data)=>{
        this.setState({ data })
      })
  }




    render(){
      console.log(this.props);

    const {data} = this.state;
    const{entity} = this.props;
    if(!data){ return <Spinner /> }



    return <View {...this.props} data={data} />;

    };
  };
};
export {withDataHOC};
