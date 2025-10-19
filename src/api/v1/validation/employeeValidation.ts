import Joi from "joi";
export const employeeSchema = Joi.object({
    name: Joi.string().min(2).required(),
    position: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    branchId: Joi.string().required(),
});