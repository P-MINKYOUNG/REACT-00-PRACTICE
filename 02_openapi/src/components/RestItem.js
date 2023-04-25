import { Link } from "react-router-dom";
import { getRestDetail, getRestList } from "../api/RestAPI";

function RestItem({rest}){

    return (
        <Link to={`/rest/${rest.MSRADMCODE}`}>    
            <div className="item">
                <h3>측정 날짜 : {rest.MSRDATE}</h3>
                <h3>측정소명 : {rest.MSRSTENAME} </h3>
            </div>
        </Link>
        )

}

export default RestItem;