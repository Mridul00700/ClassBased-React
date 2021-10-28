
import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';




class Users extends Component {

  constructor() {
    super();
    this.state = {                     // In Class based components state is always an object no choice like in functional components. and state property name has to be used. 
      showUsers: true,  // In class based you have to grp all the state you need in one big object. 
    }
  }
  toggleUsersHandler() {
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers
      }
    });  // here the object passed will not override the original state, it will merge the object with the old state.
  }



  render() {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }

  // const Users = () => {
  //   const [showUsers, setShowUsers] = useState(true);

  //   const toggleUsersHandler = () => {
  //     setShowUsers((curState) => !curState);
  //   };



  //   return (
  //     <div className={classes.users}>
  //       <button onClick={toggleUsersHandler}>
  //         {showUsers ? 'Hide' : 'Show'} Users
  //       </button>
  //       {showUsers && usersList}
  //     </div>
  //   );
  // };

}
export default Users;
