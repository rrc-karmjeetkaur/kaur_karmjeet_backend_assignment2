import Joi from "joi";
export const branchSchema = Joi.object({
    name: Joi.string().min(2).required(),
    address: Joi.string().min(5).required(),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
});