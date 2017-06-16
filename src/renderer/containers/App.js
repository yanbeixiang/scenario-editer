import React, { Component, PropTypes } from 'react';

export default class extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    render () {
        return this.props.children
    }
}