import React from 'react';
import DaoTaoLapTrinh from './DaoTaoLapTrinh';
import LoTrinh from './LoTrinh';

function GioiThieu(props) {
    return (
        <div className="intro">
            <DaoTaoLapTrinh />
            <LoTrinh />
        </div>
    );
}

export default GioiThieu;