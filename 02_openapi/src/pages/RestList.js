import {getRestList} from '../api/RestAPI'
import {useState, useEffect } from 'react';
import RestItem from '../components/RestItem';


function RestList(){

    const [restList, setRestList] = useState();

    useEffect(
        () => {
            getRestList().then(data => setRestList(data));
        },[]
    )

    return (
        <div className="content-row">
            {restList && restList.ListAirQualityByDistrictService.row.map(rest => <RestItem key={rest.MSRADMCODE} rest={rest}/>)}
        </div>
      );

}

export default RestList;