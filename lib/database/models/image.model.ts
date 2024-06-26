import { Document, Schema, model, models } from "mongoose"

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string; // Assuming URL is stored as a string
    width?: number;
    height?: number;
    config?: Record<string, any>; // or specific shape if config structure is known
    transformationUrl?: string; // Assuming URL is stored as a string
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }; // Referring to a User document
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema({
    tittle: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: String, required: true},
    width: { type: Number },
    height: { type: Number},
    config: { type: Object},
    transformationUrl:  {type: String},
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String},
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt:  { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image;