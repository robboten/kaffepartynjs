import { latinLg, latinSm, latinMd } from '../lib/constants'

function LoremIpsum({ p }) {
    var str= latinSm;
    if (p == 2) {
        str = latinMd
    } else if (p == 3) {
        str = latinLg
    }
    return (<div className="pre-wrap">{str}</div>)
}
export default LoremIpsum;