export default function Home() {
  return (
    <main style={{fontFamily:'system-ui, Arial, sans-serif', padding: 32}}>
      <h1>✅ DineDivine — Dev Home</h1>
      <p>This is a temporary root page to verify the dev server is serving content.</p>
      <ul>
        <li><a href="/about">/about</a></li>
        <li><a href="/fantasy-cricket">/fantasy-cricket</a></li>
        <li><a href="/how-to-play">/how-to-play</a></li>
        <li><a href="/responsible-gaming">/responsible-gaming</a></li>
        <li><a href="/auth/login">/auth/login</a></li>
        <li><a href="/auth/register">/auth/register</a></li>
      </ul>
    </main>
  )
}
