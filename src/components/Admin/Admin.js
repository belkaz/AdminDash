import React, { Component } from 'react';

import DisplayRights from '../DisplayRights/DisplayRights';

class CAdmin extends Component {
    render() {
        return (
            <div className = 'CAdmin'>
                Admin
                <DisplayRights />
            </div>
        )
    }
}

export default CAdmin;