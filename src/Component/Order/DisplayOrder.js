import React from 'react';
import Header2 from '../Header2';

const DisplayOrder = (props) => {
    
    console.log(props);
    const renderData = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {

                return(

                    <>

                    <tr key={item.id}>
                        <td>{item.orderId}</td>
                        <td>{item.menuItem}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>Rs.{item.cost}</td>
                        <td>{item.phone}</td>

                    </tr>

                    </>
                )
            })
        }
    }



        // return(

        //                 <>
    
        //                 <tr key={orderData.orderId}>
        //                     <td>{orderData.orderId}</td>
        //                     <td>{orderData.rest_name}</td>
        //                     <td>{orderData.name}</td>
        //                     <td>{orderData.email}</td>
        //                     <td>Rs.{orderData.cost}</td>
        //                     <td>{orderData.phone}</td>
    
        //                 </tr>
    
        //                 </>
        //             )
        

        return(
            <div className="container p-15">

                <center><h2>Orders</h2></center>
                <table className='table' p-10>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Menu Item</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cost</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData(props)}
                    </tbody>
                </table>

            </div>
        )

}

export default DisplayOrder;