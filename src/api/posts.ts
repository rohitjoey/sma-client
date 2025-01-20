import api from "@/config/axios";
import { apiRequest } from "@/lib/utils";

export const getPosts = () => apiRequest(api.get(`/posts`));
