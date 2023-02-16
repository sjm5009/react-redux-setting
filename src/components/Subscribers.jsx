import React from 'react';
import { connect } from "react-redux";
import { addSubscriber, removeSubscriber } from "../redux";

const Subscribers = ({ count, addSubscriber, removeSubscriber }) => {
  return (
    <div className="items">
        <p>구독자 수: {count}</p>
        <button onClick={()=> addSubscriber()}>구독하기</button>
        <button onClick={()=> removeSubscriber()}>구독취소</button>
    </div>
  )
};

const mapStateToProps = ({subscribers} /* state */) => {
    return {
        count: subscribers.count
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }
const mapDispatchToProps = {
    // addSubscriber: addSubscriber
    addSubscriber,
    removeSubscriber
}
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)