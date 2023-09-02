export type HomeScreenResponse = Array<UserData>;

export type UserData = {
    name: string;
    categories: Array<Category>;
};

export type Category = {
    imageUrl: string;
    description: string;
};