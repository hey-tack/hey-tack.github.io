import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Testing out routing</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </main>
  );
}
