import z from "zod";

export const schemaCreateDocument = z.object({
    originalName: z.string('the document original name is missing'),
    fileName: z.string('the document file name is missing'),
    path: z.string('the document path name is missing'),
    userId: z.number('user id is missing'),
})