import React from 'react';

type errorType = {
    message: string
}
const ErrorMessage = ({ message }: errorType) => {
    return (
        <div className="bg-red-500 text-white p-4 rounded-md">
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
