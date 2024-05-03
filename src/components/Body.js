import ResturantCards from "./ResturantCards";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [resturantList, setresturantList] = useState(resData)
    return (
        <div className='Body'>
            <h2 className='section_heading'>Restaurants with online food delivery in Hyderabad</h2>
            <button className="button-5" onClick={() => {
                let filteredData = resturantList.filter(res => {
                    return res.info.avgRating > 4
                })
                setresturantList(filteredData);
            }}>Restaurants Filter</button>
            <div className='cardsContainer'>
                {
                    resturantList.map((res) => {
                        // { console.log(res) }
                        return < ResturantCards key={res.info.id} resData={res} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;