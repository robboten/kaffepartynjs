// api/route
import { latinLg, json_latinMd, shortLatin } from '../lib/constants'

export const payload = { name: 'John Doe' };

export default function handler(req, res) {
    const query = req.query;
    const { limit } = query;
    console.log(query);

    res.status(200).json(json_latinMd);
}