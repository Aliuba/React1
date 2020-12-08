import React, {Component} from 'react';
import Sinderellas from '../database/Sinderellas'
class Sinderellacomponent extends Component {
    state={users:[], chosen:null}

        Select=(id)=>{
        let {users}=this.state
          let  chosen= users.find(user=>user.id===id)
            this.setState({chosen})
        }

    render() {
  let {users, chosen}=this.state
        return (
            <div>
                {users.map(user=><Sinderellas item={user} key={user.id} Select={this.Select}/>)}
                {chosen && <h1> {chosen.name}</h1>}
            </div>

        );
    }
    componentDidMount() {fetch("https://jsonplaceholder.typicode.com/users")
        .then(user=>user.json())
        .then(json=>this.setState({users:json}))
    }

}

export default Sinderellacomponent;