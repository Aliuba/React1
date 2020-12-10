import React, {Component} from 'react';
import Sinderellas from "../database/Sinderellas";
import {UserService} from "../services/UserService";

class Sinderellacomponent extends Component {
    state={users:[], chosen: null}

    UserServ= new UserService()
    test=(id)=>{
       this.UserServ.getUsersbyId(id).then(value=>this.setState({chosen:value}))
    }
    render() {
let {users, chosen}=this.state
        return (
            <div>
                {users.map(user=> <Sinderellas item={user} test={this.test} key={user.id}/>)}
                {chosen&&<Sinderellas item={chosen} onButton={true}/>}
            </div>
        );
    }
    componentDidMount() {this.UserServ.getAllUsers().then(value=>this.setState({users: value}))

        }

}

export default Sinderellacomponent;