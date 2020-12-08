import React, {Component} from 'react';

class Sinderellas extends Component {
    render() {
        let{item, Select}=this.props
        return (
            <div>
                <div>{item.name}----{item.email} <button onClick={()=>Select(item.id)}>chose</button></div>
            </div>
        );
    }
}

export default Sinderellas;