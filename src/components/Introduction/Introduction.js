import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.textCenter}>
                    <h1>React Redux Boilerplate</h1>
                    <h5>create by Weerapat Chulaket</h5>
                </div>
            </div>
        )
    }
}

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 56px)'
    },
    textCenter: {
        textAlign: 'center'
    }
}

export default Introduction