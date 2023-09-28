export type HomeScreenResponse = Categories;

export type Categories = {
    results: Array<Category>;
};

export type Category = {
    image: string;
    description: string;
};
export type User = {
    id:string,
    name: string,
}

export type SignUp = {
    data : {
        phone_number : string,
        name: string
    },
    Status : Number,
    Msg: string
}

export type UserData ={
    Data: {
        Code: Number;
      };
      user: {
        name: string;
        phone_number: string;
      };
}