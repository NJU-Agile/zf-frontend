import React, { Component } from 'react';
import { connect } from 'dva';

const namespace = 'Demo';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'No data'
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type   : `${namespace}/fetchData`,
      payload: {
        // e.g. data: 'hello world',
      },
    }).then(res => {
      this.setState({
        data: res.data || 'Server Wrong'
      })
    });
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // e.g. state_name: prop_name,
  };
}

export default connect(mapStateToProps)(Hello);
