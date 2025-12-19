import { useState } from 'react'
import { LetterAvatar } from './lib/LetterAvatar'
import { DefaultAvatar } from './lib/DefaultAvatar'
import { RandomAvatar } from './lib/RandomAvatar'

function App() {
  const [name, setName] = useState('John Doe')
  const [seed, setSeed] = useState('username')

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>React Avatar Utils Playground</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>Letter Avatar</h2>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <LetterAvatar name="John Doe" />
          <LetterAvatar name="Alice Smith" />
          <LetterAvatar name="Bob" />
        </div>
        <div style={{ marginTop: 10 }}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Type name..." />
          <br />
          <LetterAvatar name={name} style={{ marginTop: 10 }} />
        </div>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Default Avatar</h2>
        <div style={{ display: 'flex', gap: 20 }}>
          <DefaultAvatar gender="neutral" />
          <DefaultAvatar gender="male" />
          <DefaultAvatar gender="female" />
        </div>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Random Avatar</h2>
        <div style={{ display: 'flex', gap: 20 }}>
          <RandomAvatar seed="user1" />
          <RandomAvatar seed="user2" />
          <RandomAvatar seed="user3" />
          <RandomAvatar /> {/* Random every render/mount if no seed? Or consistent per mount? */}
        </div>
        <div style={{ marginTop: 10 }}>
          <input value={seed} onChange={e => setSeed(e.target.value)} placeholder="Type seed..." />
          <br />
          <RandomAvatar seed={seed} style={{ marginTop: 10 }} />
        </div>
      </section>
    </div>
  )
}

export default App
