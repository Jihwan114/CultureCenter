import React from 'react';

function Device(data){
    console.log(JSON.stringify(data));
    // const {mydevice} = data;
    return <div>My {data.mydevice},{data.myfavoritecharacter}</div>;
}

export default Device;