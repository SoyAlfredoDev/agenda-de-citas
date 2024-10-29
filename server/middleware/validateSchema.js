export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        const errors = error.errors
        console.log(errors)
        return res.status(400).json({ errors })
    }
}