import React, { Component } from 'react'

export default class B3 extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "Nguyễn Đình Dương",
            sex: "Nam",
            birthday: "13/01/2005",
            email: "duong@gmail.com",
            address: "Rú Đất, Nghệ An",
        }
    }
  render() {
    return (
      <>
      <h1>Thông tin cá nhân</h1>
      <ul>
        <li>Họ và tên: {this.state.fullName}</li>
        <li>Giới tính: {this.state.sex}</li>
        <li>Ngày sinh: {this.state.birthday}</li>
        <li>Email: {this.state.email}</li>
        <li>Địa chỉ: {this.state.address}</li>
      </ul>
      </>
    )
  }
}
