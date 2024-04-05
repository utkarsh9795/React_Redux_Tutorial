import  { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath : 'postApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://jsonplaceholder.typicode.com/',
    }),

    endpoints : (builder) => ({
        getAllPost : builder.query({
            query : () => ({
                url : 'posts',
                method : 'GET'
            })
        }),
        getPostById : builder.query({
            query: (id) => ({
                url : `posts/${id}`,
                method : 'GET'
            })
        }),
        getPostByLimit : builder.query({
            query : (num) => {
                console.log("Limit Number:", num)
                return {
                    url : `posts?_limit=${num}`,
                    method : 'GET'
                }
            }
        }),
        deletePost : builder.mutation({
            query : (id) => {
                console.log("Delete ID:", id)
                return {
                    url : `posts/${id}`,
                    method : 'DELETE'
                }
            }   
        }),
       createPost : builder.mutation({
        query : (newPost) => {
            console.log("Create Post: ", newPost)
            return {
                url : `posts`,
                method : 'POST',
                // body : {
                //     title:'This is new Title',
                //     body: 'This is new body',
                //     userId: 1,
                // },
                body : newPost,
                headers : {
                'Content-type' : 'application/json;  charset=UTF-8',   
                }
            }
        }   
    }),
    updatePost : builder.mutation({
        query : (updatePostData) => {
            console.log("Update Post: ", updatePostData)
            const {id, ...data} = updatePostData
            console.log("Actual Update Post: ", data)
            return {
                url : `posts/${id}`,
                method : 'PUT',
                body : data,
                headers : {
                'Content-type' : 'application/json;  charset=UTF-8',   
                }
            }
        }   
    }), 

}),

    
})

export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = postApi 


// learning 

// to know whether id is passed to it or not

//   getPostById : builder.query({
//   query: (id) => {
//    console.log(id)    
//   return {
//   url : `posts/${id}`,
//   method : 'GET'
//   }
//   }    
//   })