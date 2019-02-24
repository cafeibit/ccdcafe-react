import React from 'react';
import { connect } from 'react-redux';

const ErrorMessage = ({ error }) => {
    return (
        <div className="error">
            <h2 className="message">抱歉遇到一些问题！</h2>
            <p>放心我们正在解决它！</p>
            <pre>{error.toString()}</pre>
            <code>{error.stack || error.stacktrace || '没有可用的错误堆栈'}</code>
        </div>
    );
};

export default connect(state => {
    return {
        error: state.error
    };
})(ErrorMessage);
