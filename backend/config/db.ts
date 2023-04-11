import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const word: string = process.env.DB_STRING!
        const conn = await mongoose.connect(word)
        console.log(`Database connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}