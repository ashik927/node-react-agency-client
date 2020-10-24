import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Contact.css';
const OrderForm = () => {
    const [info , setInfo] = useState({});
    const [file, setFile] = useState(null);
    const history = useHistory()

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        alert("submitted");
        history.push("servicelist")
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('price', info.price);
        formData.append('description', info.description);
        fetch('https://cryptic-anchorage-36092.herokuapp.com/addorder', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="You Name/ Company Name" />
            </div>
            <div className="form-group">
                <input type="email" name="email" onBlur={handleBlur}   className="form-control" placeholder="Please Enter Your email" />
            </div>
            <div className="form-group">
                <input type="text" onBlur={handleBlur}  className="form-control" placeholder="Graphic Design" />
            </div>
            <div className="form-group">
                <textarea name="" onBlur={handleBlur}  name="description" className="form-control" id="" cols="30" rows="5" placeholder="Project Details"></textarea>
            </div>
            <div className="form-group">
                <input type="text"  onBlur={handleBlur} name="price" className="form-control" placeholder="Price" />
            </div>
            <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" placeholder="Picture" />
                    </div>
            <div className="form-group ">
                <button type="submit"   class="btn btn-dark navBtn">Submit</button>
            </div>
        </form>

    );
};

export default OrderForm;