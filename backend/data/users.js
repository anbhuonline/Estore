import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
    {
        name:'firstuser',
        email:'firstuser@example.com',
        password:bcrypt.hashSync('123456', 10),
    },
    {
        name:'seconduser',
        email:'seconduser@example.com',
        password:bcrypt.hashSync('123456', 10),
    },
]

export default users