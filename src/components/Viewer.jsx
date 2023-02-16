import React, { useState } from 'react';
import { connect } from "react-redux";
import { addView, removeView } from "../redux";

const Viewer = ({ count, addView, removeView }) => {
    const [number, setNumber] = useState(0)
    const changeViewcnt = (e) => {
        setNumber(e.target.value)
    }

    return (
        <div className="items">
            <p>조회 수: {count}</p>
            <input type="text" value={number} onChange={(e)=> changeViewcnt(e)}/>
            <button onClick={()=> addView(number)}>조회하기</button>
        </div>
    )
};

const mapStateToProps = ({viewers}) => {
    return {
        count: viewers.count
    }
}
const mapDispatchToProps = {
    addView: (number) => addView(number),
    removeView: (number) => removeView(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);