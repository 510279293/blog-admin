import React from 'react';
import {connect} from 'react-redux';
import {addList} from '@store/actions';
class Test extends React.Component{
  constructor(props) {
     super(props);
     this.inp = null;
     this.state = {
       list: []
     }
  }
  componentDidMount() {}
  submit = () => {
    this.props.onTodoClick(this.inp.value);
  }
  render(){
      const {myTodos} = this.props;
      return(<div>
        <div>
          <input ref={node => {this.inp = node;}} />
          <button onClick={this.submit}>提交</button>
        </div>
        <div>
      {myTodos.map((v,i) => (<p key={i}>{v}</p>))}
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    myTodos: state.myTodos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (text) => {
      dispatch(addList(text))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Test);
