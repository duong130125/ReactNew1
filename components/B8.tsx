import React from "react";

export default function B8() {
  const styleObject: any = {
    width: "200px",
    height: "100px",
    backgroundColor: "white",
    textAlign: "center",
    lineHeight: "100px",
  };
  return (
    <>
      <header
        style={{
          backgroundColor: "#cbd5e1",
          textAlign: "center",
          height: "60px",
          lineHeight: "60px",
        }}
      >
        Header
      </header>
      <nav
        style={{
          backgroundColor: "#9ca3af",
          textAlign: "center",
          height: "30px",
          lineHeight: "30px",
        }}
      >
        Navigation
      </nav>
      <div>
        <div className="row">
          <div
            className="col-2"
            style={{
              backgroundColor: "#16a34a",
              lineHeight: "400px",
              textAlign: "center",
            }}
          >
            Menu
          </div>
          <div
            className="col-8"
            style={{
              backgroundColor: "#fef2f2",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
          </div>
          <div
            className="col-2"
            style={{
              backgroundColor: "#93c5fd",
              lineHeight: "400px",
              textAlign: "center",
            }}
          >
            Aricle
          </div>
        </div>
      </div>
    </>
  );
}