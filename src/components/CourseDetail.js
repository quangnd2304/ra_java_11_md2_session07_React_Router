import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
    const params = useParams();
    return (
        <div>
            <h3>Course Detail</h3>
            <p>Khóa học có mã khóa học là {params.courseId}</p>
        </div>
    )
}
