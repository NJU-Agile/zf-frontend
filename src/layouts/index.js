import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.scss';

class BasicLayout extends Component {
  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!</h1>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // userInfo: state['User'].user,
  };
}

export default connect(mapStateToProps)(BasicLayout);
