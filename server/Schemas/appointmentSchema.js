import { z } from 'zod';

export const registerAppointmentSchema = z.object({
    userFirstName: z.string({
        required_error: 'User first name is required'
    }).min(3, { message: 'Minimum 3 characters' }),

    userLastName: z.string({
        required_error: 'User last name is required'
    }).min(3, { message: 'Minimum 3 characters' }),

    userEmail: z.string({
        required_error: 'User email is required'
    }).email({ message: 'Invalid email format' }),

    userPassword: z.string({
        required_error: 'User password is required'
    }).min(6, { message: 'Password must be at least 6 characters' }),

    userProfile: z.array({
        required_error: 'User profile is required'
    })
});
