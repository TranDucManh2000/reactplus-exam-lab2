import axios from "axios";
import React, { useEffect, useState } from "react";

export const AddProductForm = ({
    url,datas,setData,
    handleCancel,setDatavlua,checkid,setcheckid
}) => {
    const dataform = {
        avatar : '',
        name : '',
        content : '',
        id : '',
    }
    const [vlimage,setvlimage] = useState('');
    const [vlname,setvlname] = useState('');
    const [vlconten,setvlconten] = useState('');
    const [dataf,setdataf] = useState(dataform);
    const dlimage = (e)=>{
        setvlimage(e.target.value);
        setdataf({...dataf,
            avatar : e.target.value
        })
    }
    const dlname = (e)=>{
        setvlname(e.target.value);
        setdataf({...dataf,
            name : e.target.value
        })
    }
    const dlconten = (e)=>{
        setvlconten(e.target.value);
        setdataf({...dataf,
            content : e.target.value
        })
    }
    useEffect(()=>{
        axios.get(url+checkid)
        .then(e=>{
            const{data} = e;
            setdataf(data);
        })
    },[checkid])
    const update =()=>{
        axios.put(url+checkid,{
            avatar : vlimage,
            name : vlname,
            content : vlconten,
        }).then(e=>{
            const {data} = e;
            setDatavlua(data)
            alert("Update sp " + data.name)
            setcheckid(0);
        })
    } 
    console.log('uid',dataf);
    // update();
    const add = ()=>{
        console.log(vlconten)
        axios.post(url,
            {   
                avatar : vlimage,
                name : vlname,
                content : vlconten,
            }
        ).then((e) =>{
            const {data} = e;
            console.log('add',data)
            alert('da them moi :' + data.name)
            setDatavlua(data)
        })
    }
    const handSubmit = ()=>{
        if(checkid==0){
            add();
        }else{
            update();
        }
    }
    return <div>
        <div className="field-input-group">
            <input name="avata" value={dataf.avatar} onChange={dlimage} placeholder="Image" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input name="name" value={dataf.name} onChange={dlname} placeholder="Product name" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input name="conten" value={dataf.content} onChange={dlconten} placeholder="Product description" type="text" className="ant-input" />
        </div>
        <div className="modal-new-user-footer">
            <button onClick={handSubmit} className="ant-btn ant-btn-primary">
                Save
            </button>
            <button onClick={handleCancel} className="ant-btn" style={{marginLeft: 10}} >
                Cancel
            </button>
        </div>
    </div>
}
