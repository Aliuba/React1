import React, {Component} from 'react';
import {PostService} from "../../services/Postsservices";
import PostComponent from "../post/PostComponent";

class PostsComponent extends Component {
    state={posts:[], chose:null}
    PostService=new PostService()

    select=(id)=>{
        this.PostService.getPostByid(id).then(value => this.setState({chose:value}))
    }

    render() {
        let {posts,chose}=this.state
        return (
            <div>
                {console.log(chose)}
                {posts.map(value => <PostComponent item={value} key={value.id} select={this.select}/>)}
                {chose&&<PostComponent item={chose} onButton={true}/>}

            </div>
        );
    }

    componentDidMount() {
        this.PostService.getAllPosts().then(value => this.setState({posts:value}))
    }
}

export default PostsComponent;

