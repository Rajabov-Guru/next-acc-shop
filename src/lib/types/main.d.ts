type Role = "SUPER" | "ORDER-MANAGER" | "PRODUCT-MANAGER" | "READER" | "CLIENT";

type UserModel = {
    id: string;
    userName: string;
    email: string;
    roles: Role[];
};
