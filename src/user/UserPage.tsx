import React, { Component } from 'react';
import { User } from "../store/user/user.type";
import { RootState } from '../store/root-reducer';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from "react-redux";
import './UserListPage.css';
import { bindActionCreators } from 'redux';
import { addUser } from '../store/user/user.action';

interface LinkDispatchProps {
  addUser: (user: User) => void;
}

interface UserPageProps {
  isFetching: boolean;
}

interface UserPageState {
  name: string | null;
}

type Props = LinkDispatchProps & UserPageProps;

export class UserPage extends Component<Props, UserPageState> {

  constructor(props: Props) {
    super(props);
    this.state = {
      name: null,
    }
  }

  private submitUser() {
    if(!!this.state.name && this.state.name !== '') {
      const user: User = { id: Math.round(Math.random()*1000), name: this.state.name }
      this.props.addUser(user);
      this.setState({name: null});
    }
  }

  render() {
    return (
      <div style={{'display': 'flex', flexDirection: 'row'}}>
        <div>
          <label>Nombre</label>
          <input type="text"
                 name="name" 
                 value={this.state.name || ''}
                 onChange={(event) => this.setState({name: event.target.value})} />
        </div>
        <div>
          <button type="button" onClick={() => {this.submitUser()}}>Agregar</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): UserPageProps => {  
  const { isFetching } = state.user;
  return {    
    isFetching: isFetching || false,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, any>
): LinkDispatchProps => ({
  addUser: bindActionCreators(addUser,dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);