import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchStream} from '../actions';
import {editStream} from '../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
  componentDidMount(){
console.log(this.props.match.params.id);
this.props.fetchStream(this.props.match.params.id);
  }
  componentDidUpdate(){
    console.log("FROM UPDATE");
  }
  onSubmit=(formValues)=>{
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  }
  render(){
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return <div><StreamForm
    initialValues={_.pick(this.props.stream, 'title', 'description')}
     onSubmit={this.onSubmit}/></div>;
  }
};
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);