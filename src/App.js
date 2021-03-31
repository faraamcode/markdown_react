import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState("## Mark down")
  return (
  <main>
  <section className='markdown'>
    <textarea
      className='input'
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
    ></textarea>
    <article className='result'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  </section>
</main>
  )
}

export default App
