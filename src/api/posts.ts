import api from "@/config/axios";
import { apiRequest } from "@/lib/utils";

export interface PostInputData {
  content: string;
}

export interface UpdatePostInputData {
  id: string;
  content?: string;
  like?: boolean;
}

export const getPosts = (searchTerm:string) => {
  const url = searchTerm ? `/posts?search=${searchTerm}` : "/posts";
  return apiRequest(api.get(url));
};

export const createPostApi = (createPostData: PostInputData) =>
  apiRequest(api.post(`/posts`, createPostData));

export const updatePostApi = (updatePostData: UpdatePostInputData) =>
  apiRequest(api.patch(`/posts/${updatePostData.id}`, updatePostData));

export const deletePostApi = (id: string) =>
  apiRequest(api.delete(`/posts/${id}`));
