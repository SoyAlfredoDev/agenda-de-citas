import { z } from 'zod';

export const createUserSchema = z.object({
    userFirstName: z.string({
        required_error: 'User first name is required'
    })
        .trim()
        .min(2, { message: 'Minimum 2 characters' }),

    userLastName: z.string({
        required_error: 'User last name is required'
    })
        .trim()
        .min(2, { message: 'Minimum 2 characters' }),

    userEmail: z.string({
        required_error: 'User email is required'
    })
        .trim()
        .email({ message: 'Invalid email format' }),

    userPassword: z.string({
        required_error: 'User password is required'
    })
        .trim()
        .min(6, { message: 'Password must be at least 6 characters' }),
});


/// pwnsiwnrw agregar los roles 
