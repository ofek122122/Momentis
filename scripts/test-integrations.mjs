import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const results = {}

// ── 1. Database (Supabase via pg) ───────────────────────────────────
async function testDB() {
  const pg = await import('pg')
  const client = new pg.default.Client({ connectionString: process.env.DATABASE_URL })
  await client.connect()
  const res = await client.query(`SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename`)
  const tables = res.rows.map(r => r.tablename)
  await client.end()
  return tables
}

// ── 2. Gemini API ───────────────────────────────────────────────────
async function testGemini() {
  const { GoogleGenerativeAI } = await import('@google/generative-ai')
  const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' })
  const result = await model.generateContent(
    'Extract events from: "meeting tomorrow at 3pm". Return JSON array with title, start, end fields only. Raw JSON, no markdown.'
  )
  return result.response.text().trim().slice(0, 200)
}

// ── 3. Deepgram API ─────────────────────────────────────────────────
async function testDeepgram() {
  const { DeepgramClient } = await import('@deepgram/sdk')
  const dg = new DeepgramClient({ apiKey: process.env.DEEPGRAM_API_KEY })
  // Test by transcribing a tiny silent audio — verifies key is valid
  // Use the v1 listen endpoint with a near-empty buffer
  const res = await dg.listen.v1.media.transcribeUrl(
    { url: 'https://dpgr.am/spacewalk.wav' },
    { model: 'nova-3', smart_format: true, language: 'en' }
  )
  const transcript = res.results?.channels?.[0]?.alternatives?.[0]?.transcript ?? ''
  return `Connected — transcribed ${transcript.length} chars`
}

// ── 4. Google OAuth config check ────────────────────────────────────
function testOAuth() {
  const id = process.env.AUTH_GOOGLE_ID
  const secret = process.env.AUTH_GOOGLE_SECRET
  if (!id || id === 'your-google-client-id') throw new Error('AUTH_GOOGLE_ID not configured')
  if (!secret || secret === 'your-google-client-secret') throw new Error('AUTH_GOOGLE_SECRET not configured')
  return `Client ID: ${id.slice(0, 20)}...`
}

// ── Run all ─────────────────────────────────────────────────────────
const tests = [
  ['Database (Supabase)', testDB],
  ['Gemini API', testGemini],
  ['Deepgram API', testDeepgram],
  ['Google OAuth Config', testOAuth],
]

console.log('\n━━━ Calendro Integration Tests ━━━\n')

for (const [name, fn] of tests) {
  try {
    const result = await fn()
    console.log(`✅ ${name}`)
    console.log(`   ${typeof result === 'object' ? JSON.stringify(result) : result}\n`)
    results[name] = 'PASS'
  } catch (err) {
    console.log(`❌ ${name}`)
    console.log(`   ${err.message}\n`)
    results[name] = 'FAIL'
  }
}

const passed = Object.values(results).filter(v => v === 'PASS').length
const total = Object.keys(results).length
console.log(`━━━ Results: ${passed}/${total} passed ━━━\n`)

process.exit(passed === total ? 0 : 1)
