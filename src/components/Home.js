import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            Home<br></br>
            {/* Cách 1: sử dụng 1 tham số --> chuyển trang */}
            <button onClick={() => navigate('courses')}>Go to courses</button>
            {/* Cách 2: Sử dụng 1 tham số và history */}
            <button onClick={() => navigate(-1)}>Back page</button>
            <button onClick={() => navigate(-2)}>Back 2 pages</button>
            <button onClick={() => navigate(1)}>Forward page</button>
            <button onClick={() => navigate(2)}>Forward 2 pages</button>
            {/* Cách 3: Sử dụng 1 tham số và relace=true */}
            <button onClick={() => navigate('courses', { replace: true })}>Go to course - with replace</button>
            {/* Cách 4: Sử dụng 1 tham số và truyền dữ liệu sang trang mới */}
            <button onClick={() => navigate('courses', { state: { courseName: 'Java', className: 'Java-11' } })}>Go to course - with data</button>
        </div>
    )
}
