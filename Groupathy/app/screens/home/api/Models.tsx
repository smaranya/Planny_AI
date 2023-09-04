export type HomeScreenResponse = UserData;

export type UserData = {
    name: string;
    results: Array<Category>;
};

export type Category = {
    image: string;
    description: string;
};
