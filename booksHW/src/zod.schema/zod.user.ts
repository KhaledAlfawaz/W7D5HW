import { TypeOf, z } from 'zod';

export const createUserType = z.object({
  body: z.object({
    username:z.string({
      required_error:"username is required",
      invalid_type_error:"username must be string"
    }),
    password:z.number({
      required_error:'password is required',
      invalid_type_error:'password must be number'
    }),    
  }),
});


export type createUserSchema = TypeOf<typeof createUserType>['body'];

