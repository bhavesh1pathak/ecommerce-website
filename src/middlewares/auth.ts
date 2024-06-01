import { User } from '../models/user.js';
import ErrorHandler from '../utils/utility-class.js';
import { TryCatch } from './error.js';

// Middleware to ensure only admin is valid
export const adminOnly = TryCatch(async (req, res, next) => {
  const { id } = req.query;

  if (!id) {
    return next(new ErrorHandler("PLEASE LOGIN FIRST", 401));
  }

  
    const user = await User.findById(id);

    if (!user) {
      return next(new ErrorHandler("THIS IS INVALID ID ", 401));
    }

    if (user.role !== "admin") {
      return next(new ErrorHandler("YOU NOT ABLE TO GET ALL DETAILS ", 403));
    }

    next();
  
});
