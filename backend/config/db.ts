import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING)

        console.log(`Database connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}