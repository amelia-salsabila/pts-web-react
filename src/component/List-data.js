import React from "react";
import Item from  "./Item-data";


function ListData({datas}) {

    return (
        <div class="list-data">
            {
                datas.map((data) => (
                    <Item name={data.name} desc={data.desc} image={data.image} />
               ))
            }
            
        </div>
    );

}
export default ListData; 