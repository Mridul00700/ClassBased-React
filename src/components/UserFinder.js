import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import Classes from './UserFinder.module.css';
import UsersContext from '../store/user-context';
import ErrorBoundary from './ErrorBoundary';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];
class UserFinder extends Component {

    static contextType = UsersContext;     //  In class based component you can only access one context in one class based component. unlike functional based
    // Where multiple useContext hooks can be used to point at different contexts.

    constructor() {
        super();
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: ''
        };
    }

    componentDidMount() {
        //Send http request
        this.setState({ filteredUsers: this.context.users })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <div className={Classes.finder}>
                        <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                    </div>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary >
            </Fragment>

        );
    }
}



// const UserFinder = () => {


//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (

//     );
// };

export default UserFinder;