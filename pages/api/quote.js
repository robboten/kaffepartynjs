export default async function handler(req, res) {
    //remove method?
    const { method } = req;
    const test=await getStaticProps();

    switch (method) {
        case "GET":
            res.status(200).json(test);
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}

async function getStaticProps() {
    const res = await fetch('https://zenquotes.io/api/random')
    const json = res.json();
    return json;
  }