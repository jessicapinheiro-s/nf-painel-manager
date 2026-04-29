import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    originalName: String,
    fileName: String,
    path: String,
    userId: Number,
    created_at: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Document', DocumentSchema);