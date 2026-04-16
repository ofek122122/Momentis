import { GoogleGenerativeAI } from '@google/generative-ai'

const globalForGemini = globalThis as unknown as { gemini: GoogleGenerativeAI }

export const geminiClient =
  globalForGemini.gemini ?? new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

if (process.env.NODE_ENV !== 'production') globalForGemini.gemini = geminiClient

export const flashModel = geminiClient.getGenerativeModel({
  model: 'gemini-2.5-flash',
})
