import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function Courses() {
    const data = useLocation();
    // Khai báo searchParam quản lý dữ liệu searchparam
    const [searchParam, setSearchParam] = useSearchParams("");
    return (
        <div>
            Courses - Course Name: {data.state ? data.state.courseName : ""} - Class Name: {data.state ? data.state.className : ""}
            <h3>Danh sách khóa học ở Rikkei Academy</h3>
            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Java Fullstack</td>
                        <td>1200</td>
                        <td><button onClick={() => setSearchParam({ courseName: 'Java Fullstack', time: 1200 })}>Detail</button></td>
                    </tr>
                    <tr>
                        <td>Javascript Fullstack</td>
                        <td>1000</td>
                        <td><button onClick={() => setSearchParam({ courseName: 'Javascript Fullstack', time: 1000 })}>Detail</button></td>
                    </tr>
                </tbody>
            </table>
            <h3>Thông tin chi tiết khóa học</h3>
            <p>Course Name:{searchParam.get('courseName')} - Time:{searchParam.get('time')} </p>
        </div>
    )
}
