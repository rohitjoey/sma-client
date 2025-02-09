import api from "@/config/axios";
import { GenderEnum } from "@/lib/typedef";
import { apiRequest } from "@/lib/utils";

export interface UserRegisterInputData extends LoginInputData {
  fullName: string;
  gender: GenderEnum;
}

export interface LoginInputData {
  email: string;
  password: string;
}

export const registerUserApi = (registerData: UserRegisterInputData) =>
  apiRequest(api.post("/auth/register", registerData));

export const loginUserApi = (loginData: LoginInputData) =>
  apiRequest(api.post("/auth/login", loginData));

export const getUserData = (userId: string) =>
  apiRequest(api.get(`/auth/users/${userId}`));
