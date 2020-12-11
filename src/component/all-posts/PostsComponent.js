import React, {Component} from 'react';
import {PostServices} from "../../services/Postsservices";
import PostComponent from "../post/PostComponent";


class PostsComponent extends Component {

    postService=new PostServices()
    state= {posts:[], chosen: null}

  Ddd(id){
   this.postService.getPostById(id).then(value => this.setState({chosen:value}))
    }

    render() {
        let {posts, chosen}=this.state
        return (
            <div>
                {posts.map(value=><PostComponent item={value} Ddd={this.Ddd} key={value.id}/>)}
                {chosen&&<PostComponent item={chosen} showButton={true}/>}
                {console.log(chosen)}
            </div>
        );
    }
    componentDidMount (){
      this.postService.getAllPosts().then(value => this.setState({posts:value}))
    }
}

export default PostsComponent;