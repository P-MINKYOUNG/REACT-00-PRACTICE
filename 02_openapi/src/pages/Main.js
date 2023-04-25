import {Link} from 'react-router-dom';

function Main(){

    return (
        <Link to="/rest">
            <div className="content-row">
                <h1>미세먼지 보러 가기</h1>
            </div>
        </Link>
    )
}

export default Main;