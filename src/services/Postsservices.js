export class PostService{
    url="https://jsonplaceholder.typicode.com/posts"
    getAllPosts=()=>{
        return fetch(this.url)
            .then(value => value.json())
    }
    getPostByid=(id)=>{
        return fetch(this.url+"/"+id)
            .then(value => value.json())
    }
}