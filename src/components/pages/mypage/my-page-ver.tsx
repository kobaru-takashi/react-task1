import React, { useState, useCallback, useEffect } from "react"

export const MyPageVer = () => {
  const [text , setText] = useState("")
  const handleInputChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  useEffect(() => {
    console.log("text");
  }, [text]);





  return (
    <>
      <input type="text" value={text} onChange={handleInputChange} />
      <h1>入力表示：{text}</h1>
      {/* Inputの中に売った文字を画面に表示 <br />
      useCallback使って <br />
      useEffect使って <br /> */}
    </>
  )
}