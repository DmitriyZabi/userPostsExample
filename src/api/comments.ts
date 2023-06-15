import axios from 'axios'
import { IComment } from '../redux/comments/models'

export const fetchComments = (postId: number) =>
  axios.get<IComment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  )
