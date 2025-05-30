import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Define schema for Convex database
export default defineSchema({
  users: defineTable({
    userName: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    upgrade: v.boolean(),
  }),
  pdfFiles: defineTable({
    fileId: v.string(),
    storageId: v.string(),
    fileName: v.string(),
    fileUrl: v.string(),
    createdBy: v.string(),
  }),
  documents: defineTable({
    embedding: v.array(v.number()),
    text: v.string(),
    metadata: v.any(),
  }).vectorIndex("byEmbedding", {
    vectorField: "embedding",
    dimensions: 768,
  }),
  notes: defineTable({
    fileId: v.string(),
    notes: v.any(),
    createdBy: v.string(),
  }),
});
