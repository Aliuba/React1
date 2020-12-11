import React, {Component} from 'react';

import PostsComponent from "./component/all-posts/PostsComponent";
import Sinderellacomponent from "./component/Sinderellacomponent";

class App extends Component {

    render() {
        return (
            <div>
                <PostsComponent/>
            </div>
        );
    }
}

export default App;
