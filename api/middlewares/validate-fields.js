import { body, validationResult } from "express-validator"

export const validateFields = (req, res, next) => {

    body("profielPicture").notEmpty()

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next()
}


export const userValidator = [
    body('name').notEmpty(),
    body('username').notEmpty(),
    body('mail').isEmail(),
    body('password').isLength({ min: 8 }),
    validateFields
]

export const loginValidator = [
    body('mail').isEmail(),
    body('password').isLength({ min: 8 }),
    validateFields
]