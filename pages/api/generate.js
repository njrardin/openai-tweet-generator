import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.tweetAuthor),
    temperature: 0.75,
    max_tokens: 100,
  });
  console.log('Result:', completion);
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(tweetAuthor) {
  return `Generate a full sentence fake tweet less than 280 characters long.

Author: Taylor Swift
Tweet: with some help from the excellent @birbigs, @bejohnce, and @meellisday who fabulously portray… get ready for it… my grown sons and daughter in law? Anyway. Forever grateful to my incredible DP @The_RinaYang and our amazing crew. 🌌🤩
Author: Hank Green
Tweet: A lot of people who say they want "free speech" actually just want to be the one in charge of which speech is free.
Author: s${tweetAuthor}
Tweet: `;
}
