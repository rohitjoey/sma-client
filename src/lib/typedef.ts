
export type BaseType = {
    id: string;
    createdAt: Date
    updatedAt: Date
}

export enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

export type User = {
    fullName: string;
    gender: GenderEnum;
    email: string;
};

export interface UserResponse extends BaseType {
    user: User;
    token: string;
}