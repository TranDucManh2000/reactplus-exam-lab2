import axios from 'axios'
import React, {useEffect, useState} from 'react';
import './ListProduct.css'

export const ListProduct = ({
    datas,url,setData,setDatavlua,
    handleOpenModal,setformdata,formdata,setcheckid
}) => {
    

    const handfromdata = (id)=>{
        handleOpenModal();
        setcheckid(id);
        console.log(id);
        axios.get(url+id)
        .then(e=>{
            const{data} = e;
            setformdata(data);
        })
    }
    // const handid2 = ()=>{
    //     console.log('dataf',formdata)
    // }
    const hanremo = (vlid)=>{
        console.log('xoa id ',vlid);
        axios.delete(url+vlid).then(e =>{
            const{data} = e;
            setDatavlua(data);
            alert('da xoa id : '+vlid);
        })
    }
    return <div className="ant-list-items">
        {
            datas.map((value,index)=>(
                <div className="ant-list-item">
                <div className="ant-list-item-meta">
                    <div className="ant-list-item-meta-avatar">
                        <span className="ant-image-img">
                            <img key={index} src={value.avatar} style={{width: 100}}/>
                        </span>
                    </div>
                    <div className="ant-list-item-meta-content">
                        <h4 className="ant-list-item-meta-title">
                            <a key={index}> Name : {value.name}</a>
                        </h4>
                        <div key={index} className="ant-list-item-meta-description">
                            Description : {value.content}
                        </div>
                    </div>
                    <ul className="ant-list-item-action">
                        <li>
                            <a key={index} 
                            onClick={()=>{
                                handfromdata(value.id)
                            }}>Edit</a>
                        </li>
                        <li>
                            <a key={index} onClick={()=>{
                                hanremo(value.id);
                            }}>Remove</a>
                        </li>
                    </ul>
                </div>
            </div>
            ))
        }
        
    </div>
}