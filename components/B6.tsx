import React from 'react'

interface User {
    firstName: string
    lastName: string
}
function formatName(user: User){
    return user.firstName + " " + user.lastName
}
export default function B6() {
    const user: User = {
        firstName: "Nguyễn Đình",
        lastName: "Dương",
    }
  return (
    <>
    <h2>Họ và tên: {formatName(user)}</h2>
    </>
  )
}
