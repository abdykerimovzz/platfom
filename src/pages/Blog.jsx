import React from 'react'
import { FaRegNewspaper } from 'react-icons/fa'

const posts = [
  { id: 1, title: 'How we build scalable React apps', excerpt: 'Patterns, state management, and performance optimizations we use.' },
  { id: 2, title: 'API design tips for maintainable backends', excerpt: 'Designing clear contracts, versioning and auth best practices.' },
  { id: 3, title: 'Ship faster with CI/CD', excerpt: 'Automating tests and deployments so releases are safe and repeatable.' },
]

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="page-inner">
        <header className="blog-header">
          <div className="icon"><FaRegNewspaper /></div>
          <div>
            <h2>From the Blog</h2>
            <p className="lead">Latest articles, tutorials and team notes about design and development.</p>
          </div>
        </header>

        <div className="posts">
          {posts.map(p => (
            <article key={p.id} className="post">
              <h3>{p.title}</h3>
              <p className="excerpt">{p.excerpt}</p>
              <a className="read-more" href={`/blog/${p.id}`}>Read article →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
