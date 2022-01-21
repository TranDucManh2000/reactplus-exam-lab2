import React, {useEffect, useState} from 'react';
import { Modal } from 'antd';

import {ListProduct} from './components/ListProduct'
import {AddProductForm} from './components/AddProductForm'

import 'antd/dist/antd.css'
import './App.css';
import axios from 'axios';

function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const url = 'https://5d36d86c86300e0014b647c7.mockapi.io/products/';
    const dataform = [{
        avatar : '',
        name : '',
        content : '',
        id : '',
    }]
    const [datas,setData] = useState([]); 
    const [datavlua,setDatavlua] = useState(dataform);
    const [formdata,setformdata] = useState(dataform);
    const [checkid,setcheckid] = useState(0);
  
    console.log(datas);
    useEffect(()=>{
        console.log('getdata',datas)
        axios.get(url)
        .then((e)=>{
            const {data} = e;
            setData(data);
        })
    },[datavlua])

    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <div className="App">
            <h2>List product</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New Product
                </button>
            </div>
            <ListProduct 
            setcheckid={setcheckid}
            formdata={formdata}
            setformdata={setformdata}
            handleOpenModal={handleOpenModal}
            setDatavlua={setDatavlua} 
            datas={datas} url={url} 
            setData={setData} />
            <Modal title="Add Product" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <AddProductForm 
                formdata={formdata}
                checkid={checkid}
                setcheckid={setcheckid}
                setDatavlua={setDatavlua}
                handleCancel={handleCancel} 
                url={url} datas={datas} 
                setData={setData}/>
            </Modal>
        </div>
    );
}

export default App;
