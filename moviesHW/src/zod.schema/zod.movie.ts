import { TypeOf, z } from 'zod';


const idValidation = z.string({
  required_error:"id is required",
  invalid_type_error:"id must be string"
})

const nameValidation = z
.string({
  required_error: 'name is required',
  invalid_type_error: 'name is invaild',
})
.min(2, 'name must be mare than 3 char')

const genreValidation =z.enum(['action', 'comedy', 'drama'], {
  required_error: 'genre is required',
})

const ratingValidation = z
.number({
  required_error: 'rating is required',
  invalid_type_error: 'rating is invaild',
})
.min(1, 'min rating number is 1')
.max(5, 'max rating number is 5')

const durationValidation =z
.number({
  required_error: 'duration is required',
  invalid_type_error: 'duration is invaild',
})
.min(60, 'duration must be represented in minutes and more 60')




export const createMovieType = z.object({
  body: z.object({
    name:nameValidation,
    genre:genreValidation,
    rating:ratingValidation,
    duration:durationValidation,
  }),
});


export const updateMovieType = z.object({
  body: z.object({
    id:idValidation,
    name:nameValidation,
    genre:genreValidation,
    rating:ratingValidation,
    duration:durationValidation,
  }),
});


export const deleteMovieType = z.object({
  body: z.object({
    id:idValidation
  }),
});


export const getMovieByNameType = z.object({
  body: z.object({
    name:nameValidation,
  }),
});

export const getAllMoviesByGenreType = z.object({
  body: z.object({
    genre:genreValidation,
  }),
});

export const getAllMoviesRatingType = z.object({
  body: z.object({
    rating:ratingValidation,
  }),
});

export type getAllMoviesByGenreSchema = TypeOf<typeof getAllMoviesByGenreType>['body'];
export type getAllMoviesRatingSchema = TypeOf<typeof getAllMoviesRatingType>['body'];
export type createMovieSchema = TypeOf<typeof createMovieType>['body'];
export type updateMovieSchema = TypeOf<typeof updateMovieType>['body'];
export type deleteMovieSchema = TypeOf<typeof deleteMovieType>['body'];
export type getMovieByNameSchema = TypeOf<typeof getMovieByNameType>['body'];
