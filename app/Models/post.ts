export interface Post {
    id: number;
    title: string;
    description: string;
    saleType: string;
    price: number;
    image: string;
    location: string;
    postedAt: string;
    contact: string;
    category: string;
    status: string;
    negotiable: boolean;
    condition: string;
    delivery: boolean;
    deliveryFee: number;
    userId: string;
    user:{
        id: string;
        name: string;
        email: string;
        avatar: string;
        contact: string;
    }
}
