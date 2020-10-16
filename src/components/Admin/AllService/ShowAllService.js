import React from 'react';

const ShowAllService = (props) => {
    return (

        <tbody>
            {
                <tr>
                    <td>{props.service.name}</td>
                    <td>{props.service.email}</td>
                    <td>{props.service.description}</td>
                </tr>
            }

        </tbody>

    );
};

export default ShowAllService;