import React from 'react'
function add(a:number, b:number){
  return a + b
}
function minus(a:number, b:number){
  return a - b
}
function core(a:number, b:number){
  return a * b
}
function divide(a:number, b:number){
  return a / b
}

export default function B2() {
  return (
    <>
    <h1>Danh sách kết quả</h1>
    <ul>
      <li>10 + 10 = {add(10, 10)}</li>
      <li>10 - 10 = {minus(10, 10)}</li>
      <li>10 * 10 = {core(10, 10)}</li>
      <li>10 / 10 = {divide(10, 10)}</li>
    </ul>
    </>
  )
}
