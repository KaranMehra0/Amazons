import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name:'Karan',
            email:'admin@example.com',
            password: bcrypt.hashSync('223330'),
            isAdmin: true
        },
        {
            name:'Amazons',
            email:'user@example.com',
            password: bcrypt.hashSync('223330'),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'nike size shirt',
            slug: 'nike size shirt',
            category: 'shirts',
            image: '/image/p1.webp',
            price: 20,
            countInStock: 5,
            brand: 'Nike',
            rating: 1.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {            
            name: 'nike size pants',
            slug: 'nike size pants',
            category: 'pants',
            image: '/image/p2.webp',
            price: 25,
            countInStock: 10,
            brand: 'Nike',
            rating: 3.0,
            numReviews: 0,
            description: 'high quality pants'
        },
        {        
            name: 'adidas size pants',
            slug: 'adidas size pants',
            category: 'pants',
            image: '/image/p2.webp',
            price: 22,
            countInStock: 9,
            brand: 'adidas',
            rating: 5.0,
            numReviews: 10,
            description: 'high quality pants'
        },
        {            
            name: 'adidas size shirt',
            slug: 'adidas size shirt',
            category: 'shirts',
            image: '/image/p4.webp',
            price: 65,
            countInStock: 10,
            brand: 'adidas',
            rating: 0,
            numReviews: 11,
            description: 'high quality shirt'
        },

    ],
};
export default data;