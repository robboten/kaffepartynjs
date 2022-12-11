export async function loadQuotes() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://zenquotes.io/api/today')
    const data = await res.json()
    console.log(data)
    console.log("data")
    return data
}