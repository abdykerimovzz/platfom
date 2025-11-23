const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

const DATA_FILE = path.join(__dirname, 'messages.json')

function saveMessage(msg) {
  let arr = []
  try {
    if (fs.existsSync(DATA_FILE)) arr = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8') || '[]')
  } catch (e) { /* ignore */ }
  arr.push({ ...msg, createdAt: new Date().toISOString() })
  fs.writeFileSync(DATA_FILE, JSON.stringify(arr, null, 2), 'utf8')
}

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  try {
    saveMessage({ name, email, message })
    return res.json({ ok: true })
  } catch (err) {
    console.error('Failed to save contact message', err)
    return res.status(500).json({ error: 'Failed to save' })
  }
})

app.get('/api/ping', (req, res) => res.json({ ok: true, time: Date.now() }))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Contact API running on http://localhost:${PORT}`)
})
