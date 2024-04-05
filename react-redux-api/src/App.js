import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post';

function App() {
// const responseInfo = useGetAllPostQuery()
// const responseInfo = useGetPostByIdQuery(5)
// const responseInfo = useGetPostByLimitQuery(5)
// const [deletePost, responseInfo] = useDeletePostMutation()
// const [createPost, responseInfo] = useCreatePostMutation()
const [updatePost, responseInfo] = useUpdatePostMutation()

const newPost = {
  title:'This is new Title',
   body: 'This is new body',
   userId: 1,
}

const updatePostData = {
  id: 1,
  title:'This is Updated Post Title',
   body: 'This is Updated Post body',
   userId: 1,
}

  console.log("Response Information: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Success: ", responseInfo.isSuccess)

  if (responseInfo.isLoading) return <div>Loading....</div>
  if (responseInfo.isError) return <h1>An error occured{responseInfo.error.error}</h1> 


  return (

    // Get All Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
    //   {
    //     responseInfo.data.map((post, i) => 
    //     <div key={i}>
    //       <h2>{post.id} {post.title}</h2> 
    //       <p>{post.body}</p>
    //       <hr />
    //     </div>
    //     )
    //   }
    // </div>

    // get single data
    // <div className='App'>
    //    <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
    //    <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
    //    <p>{responseInfo.data.body}</p>
    // </div>

    // get limited data
    //     <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Limited Data)</h1>
    //   {
    //     responseInfo.data.map((post, i) => 
    //     <div key={i}>
    //       <h2>{post.id} {post.title}</h2> 
    //       <p>{post.body}</p>
    //       <hr />
    //     </div>
    //     )
    //   }
    // </div>

 // delete data
//  <div className="App">
//    <h1>Redux Toolkit - RTK Query (Delete  Data)</h1>
//    <button onClick={()=>{deletePost(2)}}>Delete Post</button>
//  </div>

// create data
//<div className="App">
//   <h1>Redux Toolkit - RTK Query (Create  Data)</h1>
//   <button onClick={() => { createPost(newPost) }}>Add Post</button>
// </div>

 // update data
 <div className="App">
   <h1>Redux Toolkit - RTK Query (Update  Data)</h1>
   <button onClick={() => { updatePost(updatePostData) }}>Update Post</button>
 </div>

  );
}

export default App;
