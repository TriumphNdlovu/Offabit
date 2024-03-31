import { Post } from '../Models/post'; // Add the missing import statement


export default function getPostsmock(): Post[] {
    return [
        {
            id: 1,
            title: "Iphone 12",
            description: "Brand new Iphone 12",
            saleType: "For Sale",
            price: 1000,
            image: "https://via.placeholder.com/150",
            location: "Lagos",
            postedAt: "2021-09-01",
            contact: "08012345678",
            category: "Electronics",
            status: "Active",
            negotiable: true,
            condition: "New",
            delivery: true,
            deliveryFee: 100
        },
        {
            id: 2,
            title: "Toyota Camry",
            description: "Toyota Camry 2008",
            saleType: "For Sale",
            price: 2000,
            image: "https://via.placeholder.com/150",
            location: "Abuja",
            postedAt: "2021-09-01",
            contact: "08012345678",
            category: "Cars",
            status: "Active",
            negotiable: true,
            condition: "Used",
            delivery: true,
            deliveryFee: 100
        },
        {
            id: 3,
            title: "Samsung Galaxy S20",
            description: "Samsung Galaxy S20",
            saleType: "For Sale",
            price: 800,
            image: "https://via.placeholder.com/150",
            location: "Port Harcourt",
            postedAt: "2021-09-01",
            contact: "08012345678",
            category: "Electronics",
            status: "Active",
            negotiable: true,
            condition: "Used",
            delivery: true,
            deliveryFee: 100
        },
        {
            id: 4,
            title: "HP Laptop",
            description: "HP Laptop",
            saleType: "For Sale",
            price: 500,
            image: "https://via.placeholder.com/150",
            location: "Lagos",
            postedAt: "2021-09-01",
            contact: "08012345678",
            category: "Electronics",
            status: "Active",
            negotiable: true,
            condition: "Used",
            delivery: true,
            deliveryFee: 100
        },
        {
            id: 5,
            title: "Dell Laptop",
            description: "Dell Laptop",
            saleType: "For Sale",
            price: 600,
            image: "https://via.placeholder.com/150",
            location: "Lagos",
            postedAt: "2021-09-01",
            contact: "08012345678",
            category: "Electronics",
            status: "Active",
            negotiable: true,
            condition: "Used",
            delivery: true,
            deliveryFee: 100
        },
        {
            id: 6,
            title: "Iphone 11",
            description: "Iphone 11",
            saleType: "For Sale",
            price: 900,
            image: "https://via.placeholder.com/150",
            location: "Lagos",
            postedAt: "2021-09-01",
            contact: "08012345678",
            category: "Electronics",
            status: "Active",
            negotiable: true,
            condition: "Used",
            delivery: true,
            deliveryFee: 100
        },
        {
            id: 7,
            title: "Samsung Galaxy S10",
            description: "Samsung Galaxy S10",
            saleType: "For Sale",
            price: 700,
            image: "https://via.placeholder.com/150",
            location: "Lagos",
            postedAt: "2021-09-01",
            contact: "08012345678",
            category: "Electronics",
            status: "Active",
            negotiable: true,
            condition: "Used",
            delivery: true,
            deliveryFee: 100
        },
        {
            id: 8,
            title: "Toyota Corolla",
            description: "Toyota Corolla 2010",
            saleType: "For Sale",
            price: 1500,
            image: "https://via.placeholder.com/150",
            location: "Lagos",
            postedAt: "2021-09-01",
            contact: "08012345678",
            category: "Cars",
            status: "Active",
            negotiable: true,
            condition: "Used",
            delivery: true,
            deliveryFee: 100
        }
    ];
}