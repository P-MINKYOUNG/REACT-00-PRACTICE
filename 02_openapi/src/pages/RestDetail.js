
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestDetail } from "../api/RestAPI";

function RestDetail(){

    const {MSRADMCODE} = useParams();

    const [rest, setRest] = useState();

    useEffect(
        () => {
           getRestDetail(MSRADMCODE).then(data => setRest(data));
        },[]
    );

    console.log(rest)

    return (
        <div className="content-col"> 
            {rest&&
            <>
                <div>미세 먼지 : {rest.row.map(row => <span>{row.PM10}</span>)}</div>
                <div>초 미세먼지 농도 : {rest.row.map(row => <span>{row.PM25}</span>)}</div>
                <Link to = "/rest">목록으로</Link>
            </>
            }
        </div>
            
    )
}

export default RestDetail;