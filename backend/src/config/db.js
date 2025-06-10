import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://rishavgupta2000:ny9aCFKvrdsCIy4W@notes.atmchm6.mongodb.net/?retryWrites=true&w=majority&appName=Notes")

        console.log("MONGODB CONNECTED SUCCESSFULLY!")
    } catch (error) {
        console.error("Error connecting to database", error)
        process.exit(1) // exit with failure
    }
}