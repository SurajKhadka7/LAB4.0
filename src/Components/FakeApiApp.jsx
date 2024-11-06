// FakeApiApp.js
import { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostContainer from './PostContainer';


const FakeApiApp = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState({ title: '', body: '' });

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts = await response.json();
                setData(posts.reverse());
            } catch (error) {
                console.log("error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchPosts();
    }, []);

    const handleInputChange=(e)=>{
const {name,value}= e.target;
setNewPost((prev)=>({...prev,[name]: value }));
    };

    const handleAddPost=()=>{
        const post = {
            id:data.length + 1,
            ...newPost
        };
        setData([post,...data]);
        setNewPost({title:'',body:''});
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center', backgroundColor: 'black' , border:'2px solid white',
            textAlign:'center'
         }}>

            <h1>Fake Api Post Platform</h1>
            <PostForm
           
            title={newPost.title}
            body={newPost.body}
            onInputChange={handleInputChange}
            onAddPost ={handleAddPost}
            />
            {loading?<p>loading posts...</p>: <PostContainer posts={data}/>}
        </div>
    );
    };
      

export default FakeApiApp;
