import React, { Component } from 'react';
import { User } from "../store/user/user.type";
import { RootState } from '../store/root-reducer';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from "react-redux";
import './UserListPage.css';

interface LinkDispatchProps {}

interface UserListProps {
  users: User[];
  isFetching: boolean;
}

interface UserMainState {}

type Props = LinkDispatchProps & UserListProps;

export class UserListPage extends Component<Props, UserMainState> {

  private renderRows() {
    let rows: any = (<tr><td colSpan={2}>No hay usuarios</td></tr>);
    if(!!this.props.users && this.props.users.length > 0) {
      rows = (          
        this.props.users.map((u, i) => {
          return (<tr>
            <td key={i}>{u.id}</td>
            <td key={i}>{u.name}</td>
            </tr>
          )
        })
      );
    }
    return rows;
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>            
          </thead>
          <tbody>
            { this.renderRows() }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): UserListProps => {  
  const { isFetching, users } = state.user;
  return {    
    isFetching: isFetching || false,
    users: users || []
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, any>
): LinkDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);