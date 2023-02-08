import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Courses() {
    const data = useLocation();
    console.log("Data-->", data);
    return (
        <div>
            Courses - Course Name: {data.state ? data.state.courseName : ""} - Class Name: {data.state ? data.state.className : ""}
        </div>
    )
}
