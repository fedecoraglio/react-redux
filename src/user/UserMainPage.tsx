import React, { Component } from 'react';
import { connect } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from "redux";
import { listUser } from '../store/user/user.action';
import { RootState } from '../store/root-reducer';

import UserListPage from './UserListPage';
import UserPage from './UserPage';

interface LinkDispatchProps {
  listUser: () => void;
}

interface UserMainProps {}

interface UserMainState {}

interface UserMainProps {}

type Props = LinkDispatchProps

export class UserMainPage extends Component<Props, UserMainState> {

  componentDidMount() {
    this.props.listUser();
  }

  render() {
    return (
      <div>
        <div><UserPage /></div>
        <div><UserListPage /></div>        
      </div>
      
    )
  }

}

const mapStateToProps = (state: RootState): UserMainProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, any>
): LinkDispatchProps => ({
  listUser: bindActionCreators(listUser,dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMainPage);