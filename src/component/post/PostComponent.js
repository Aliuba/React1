import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let{item, Ddd, showButton}=this.props
        return (
            <div>
                {item.title}-{item.id}-{!showButton&&<button onClick={()=>Ddd(item.id)}>chose me</button>}

            </div>
        );
    }
}

export default PostComponent;