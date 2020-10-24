import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddAdminService = () => {
    const [info , setInfo] = useState({});
    const [file, setFile] = useState(null);
    const history = useHistory();

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
        const formData = new FormData()
        alert("submitted");
        history.push("/")
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        fetch('https://cryptic-anchorage-36092.herokuapp.com/addservice', {
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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-black"> <b>Service Title</b> </label>
                    <input type="text" onBlur={handleBlur} name="name" className="form-control" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                <label className="text-black"> <b>Description</b> </label>
                    <textarea name="description" onBlur={handleBlur} className="form-control" id="" cols="30" rows="5" placeholder="Enter Description"></textarea>
                </div>
                <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" placeholder="Picture" />
                    </div>
                <div className="form-group ">
                    <button type="submit" class="btn btn-dark navBtn">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddAdminService;