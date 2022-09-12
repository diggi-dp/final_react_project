import React from 'react'
import './products.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductTable(props) {

    const [data, setData] = useState(props.data);
    const [myArr, setMyArr] = useState(props.data);

    const onClickHandler = (e, idx) => {
        const newData = data.filter((item, index) => index !== idx)
        setData(newData)
        localStorage.setItem('data', JSON.stringify())
    }
    const onCategoryDeleteHandler = (e, idx) => {
        const newData = myArr.filter((item, index) => index !== idx)
        setMyArr(newData)
    }

    let newArr = [];
    const onchnageHandler = (e,idx)=>{
        if(e.target.checked){
            newArr.push(data[idx])
            // console.log(newArr)
        }
        if(!e.target.checked){
            const findIndex = newArr.indexOf(data[idx])
            newArr.splice(findIndex,1)
            // console.log(newArr)
        }
    }
    const checkboxDelete = ()=>{
        const filterArr = data.filter( ( element ) => !newArr.includes( element ) );
        setData(filterArr)
        newArr = [];
    }

    return (
        <>
            {/* table section  */}
            <div style={{ padding: '3%', backgroundColor: '#435c70', width: '60%' }}>
                <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={480}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>PRODUCT NAME</th>
                                <th>UNIT SOLD</th>
                                <th>IN STOCK</th>
                                <th>EXPIRAY DATE</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody className='table_body'>
                            {data && data.map((item, idx) => (
                                <tr key={item.name + '' + idx}>
                                    <th><input type="checkbox" onChange={(e)=>onchnageHandler(e,idx)}/></th>
                                    <td><strong>{item.name}</strong></td>
                                    <td><strong>{item.unitSold}</strong></td>
                                    <td><strong>{item.stock}</strong></td>
                                    <td>{item.expireDate}</td>
                                    <td><button className='myproduct-delete-link' onClick={(e) => onClickHandler(e, idx)}><i className="far fa-trash-alt myproduct-delete-icon"></i></button></td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </Scrollbars>
                <div><Link className='btn btn-block text-uppercase mb-3 mt-3' to="/addproducts">ADD NEW PRODUCT</Link></div>
                <button className='btn btn-block text-uppercase' onClick={()=>checkboxDelete()}>DELETE SELECTED PRODUCTS</button>
            </div>

            {/* category section  */}
            <div style={{ padding: '2%', backgroundColor: '#435c70', width: '30%', position: 'relative', right: '20px' }}>
                <h2 className='myheading'>Product Categories</h2>
                <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={480}>
                    <table className='table'>
                        <tbody>
                            {myArr.map((item, idx) => {
                                return (
                                    <tr key={item.name + '' + idx}>
                                        <td><strong>{item.category}</strong></td>
                                        <td><Link className='myproduct-delete-link' to="/products" onClick={(e) => onCategoryDeleteHandler(e, idx)}><i className="far fa-trash-alt myproduct-delete-icon"></i></Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Scrollbars>
                <button className='btn btn-block text-uppercase mt-3'>ADD NEW CATEGORY</button>
            </div>
        </>
    )
}
export default ProductTable;