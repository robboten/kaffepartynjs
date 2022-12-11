export default async function handler(req, res) {
    const { method } = req;
    const test=await getStaticProps();

    switch (method) {
        case "GET":
            res.status(200).json(test);
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}

async function getStaticProps() {
    const len=3;
    const res = await fetch(`http://asdfast.beobit.net/api/?length=${len}`);
    const json = res.json();
    console.log(json);
    return json;
  }