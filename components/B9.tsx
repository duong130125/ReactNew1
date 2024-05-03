import React from "react";

export default function B9() {
  return (
    <>
      <table className="table text-center">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Đình Dương</td>
            <td>13/01/2005</td>
            <td>Nam</td>
            <td>Nghệ An</td>
            <td>
              <button
                style={{ border: "1px solid black", backgroundColor: "white" }}
              >
                Sửa
              </button>
              <button
                style={{
                  border: "1px solid black",
                  backgroundColor: "red",
                  color: "white",
                  margin: "10px",
                }}
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}