import { TypeOf, z } from 'zod';



const idValidation = z.string({
  required_error:"id is required",
  invalid_type_error:"id must be string"
})

const usernameValidation = z.string({
  required_error:"username is required",
  invalid_type_error:"username must be string"
})

const passwordValidation = z.number({
  required_error:"password is required",
  invalid_type_error:"password must be number"
})

const emailValidation = z.string({
  required_error:"email is required",
  invalid_type_error:"email must be string"
})

const roleValidation = z.enum(["admin", "user"], {
  required_error: "role is required",
})

const joiningYearValidation = z.string({
  required_error:"joiningYear is required",
  invalid_type_error:"joiningYear must be string"
})

const ageValidation = z.number({
  required_error:"age is required",
  invalid_type_error:"age must be number"
})




export const createUserType = z.object({
  body: z.object({
    username:usernameValidation,
    password:passwordValidation,
    email:emailValidation,
    role:roleValidation,
    joiningYear:joiningYearValidation,
    age:ageValidation,
  }),
});

export const getOneUserType = z.object({
  body: z.object({
    id:idValidation
  }),
});

export const getUserByEmailType = z.object({
  body: z.object({
    email:emailValidation
  }),
});

export const getOlderUserType = z.object({
  body: z.object({
    age:ageValidation
  }),
});

export const roleCountType = z.object({
  body: z.object({
    role:roleValidation
  }),
});

export const loginType = z.object({
  body: z.object({
    username:usernameValidation,
    password:passwordValidation
  }),
});

export const changePasswordType = z.object({
  body: z.object({
    id:idValidation,
    password:passwordValidation
  }),
});

export const joinThisYearType = z.object({
  body: z.object({
    joiningYear:joiningYearValidation
  }),
});

export const getAlljoinThisYearType = z.object({
  body: z.object({
    joiningYear:joiningYearValidation
  }),
});


export type createUserSchema = TypeOf<typeof createUserType>['body'];
export type getOneUserSchema = TypeOf<typeof getOneUserType>['body'];
export type getUserByEmailSchema = TypeOf<typeof getUserByEmailType>['body'];
export type getOlderUserSchema = TypeOf<typeof getUserByEmailType>['body'];
export type roleCountSchema = TypeOf<typeof roleCountType>['body'];
export type loginSchema = TypeOf<typeof loginType>['body'];
export type changePasswordSchema = TypeOf<typeof changePasswordType>['body'];
export type joinThisYearSchema = TypeOf<typeof joinThisYearType>['body'];
export type getAlljoinThisYearSchema = TypeOf<typeof getAlljoinThisYearType>['body'];


