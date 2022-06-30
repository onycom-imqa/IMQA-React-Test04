import React from 'react';
import { useIMQA } from "imqa-react-sdk";

const Loading = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
            <div className="loading">
                <h1>loading...</h1>
            </div>
        </div>
    );
};

export default Loading;
