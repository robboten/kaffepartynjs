import { Row } from 'react-bootstrap';
import LoremIpsum from '../../components/lorem-ipsum';
import { sitePages } from '../../lib/constants';

import { useRouter } from 'next/router';

//rename

//move this into main function to use the title too?
function HeaderBody({ data }) {
    //if we have anything in the json for this page, display it, if not lorem
    if (!data) {
        return <></>
    }
    else if (data && data.headerbody) {
        return (
            <Row className='pb-4'>
                {data.headerbody}
            </Row>
        )
    }
    else {
        return (
            <Row className='pb-4'>
                <LoremIpsum p={1} />
            </Row>
        )
    }
}

function HeaderTitle({ title }) {
    console.log(title);
    return (

        <h1 className="display-4 fw-normal">{title}</h1>
    )
}

export function PageHeader({ title }) {
    const router = useRouter()
    const pagepath = router.pathname
    const pagedata = sitePages.find((m) => `/${m.path}` === pagepath);
    var pagetitle=title;

    if (pagedata) { 
        console.log("title: " + pagedata.title);
        pagetitle=pagedata.title ? pagedata.title : title;
    }

    return (
        <header className="p-3 pb-md-4 mx-auto text-center">
            <HeaderTitle title={pagetitle} />
            <HeaderBody data={pagedata} />
        </header>
    )


}
export default PageHeader;



