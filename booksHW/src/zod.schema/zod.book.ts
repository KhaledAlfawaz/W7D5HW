import { TypeOf, z } from 'zod';

export const createBookType = z.object({
  body: z.object({
    name:z.string({
      required_error:"name is required",
      invalid_type_error:"name must be string"
    }),
    genre:z.string({
      required_error:'genre is required',
      invalid_type_error:'genre must be string'
    }),    
  }),
});


export type createBookSchema = TypeOf<typeof createBookType>['body'];

