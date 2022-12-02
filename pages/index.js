import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [authorInput, setAuthorInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tweetAuthor: authorInput}),
    });
    const data = await response.json();
    setResult(data.result);
    setAuthorInput("");
  }

  return (
    <div>
      <Head>
        <title>Fake Tweet Generator</title>
        <link rel="icon" href="/twitter-bird-googly-eye.svg" />
      </Head>

      <main className={styles.main}>
        <img src="/twitter-bird-googly-eye.svg" className={styles.icon} />
        <h3>Generate Fake Tweet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="tweet-author"
            placeholder="Enter an author for the fake tweet"
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
          />
          <input type="submit" value="Generate tweets" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
