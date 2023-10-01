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
    msg: string
}

export type UserData ={
    data: {
        code: Number;
      };
      user: {
        name: string;
        phone_number: string;
      };
}
export type OTPresponse = {
    data:{
        OTP : string,
    }
}