import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let{item, select, onButton}=this.props
        return (
            <div>
                <div>{item.title}--{item.id}--{!onButton&&<button onClick={()=>select(item.id)}>click</button> }</div>
            </div>
        );
    }
}

export default PostComponent;