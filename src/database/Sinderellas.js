import React, {Component} from 'react';

class Sinderellas extends Component {
    render() {
        let{item, test, onButton}=this.props
        return (
            <div>
                <div>{item.name}----{item.email}--{!onButton&&<button onClick={()=>test(item.id) }>chose</button>} </div>
            </div>
        );
    }
}

export default Sinderellas;