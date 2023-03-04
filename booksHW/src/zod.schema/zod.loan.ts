import { TypeOf, z } from 'zod';

export const createLoanType = z.object({
  body: z.object({
    userId:z.string({
      required_error:"userId is required",
      invalid_type_error:"userId must be string",
      
    }),
    bookId:z.string({
      required_error:'bookId is required',
      invalid_type_error:'bookId must be string'
    }),    
  }),
});


export type createLoanSchema = TypeOf<typeof createLoanType>['body'];

