import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetailByType() {
    const params = useParams();
    console.log("Params-->", params);
    return (
        <div>
            <h3>Chi tiết khóa học theo loại khóa học</h3>
            <p>Mã khóa học: {params.courseId}- Loại khóa học:{params.courseType}</p>
        </div>
    )
}
