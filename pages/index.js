import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import FakeTweet from "fake-tweet";

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

  // a configuration object for the FakeTweet component
  const tweetConfig = {
    user: {
      nickname: "fakeUser",
      name: authorInput,
      avatar: "/twitter-bird-googly-eye.svg",
      verified: true,
      locked: false
    },
    display: "default",
    text: result ?? "Your fake tweet will appear here.",
    image: "",
    date: "3:32 PM · Feb 14, 1997",
    app: "Twitter for iPhone",
    retweets: 32000,
    quotedTweets: 100,
    likes: 12700
  };

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
        <FakeTweet config={tweetConfig} />
      </main>
    </div>
  );
}
