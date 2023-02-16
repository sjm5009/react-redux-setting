import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchComments } from "../redux";

const Comments = ({ comments, fetchComments, loading }) => {
    const commentsItems = loading ? (<div>is loading...</div>) : (
            comments.map((c, idx) => (
                idx < 10 ? <div key={c.id}>
                                <h3>{c.name}</h3>
                                <p>{c.email}</p>
                                <p>{c.body}</p>
                            </div> : null
            ))
        )
    useEffect(()=>{
        fetchComments()
    }, [])

    return (
        <div className="comments">
            {commentsItems}
        </div>
    )
}

const mapStateToProps = ({ comments }) => {
    return {
        comments: comments.items
    }
}
const mapDispatchToProps = {
    fetchComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);