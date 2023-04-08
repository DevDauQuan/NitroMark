import React from 'react';

const ReportLabel = ({ title, value }) => {
    return (
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">

            <div>
                <p className="desc">{title}</p>
                <h4 className="mb-0 sub-title">{value}</h4>
            </div>

        </div>
    );
};

export default ReportLabel;