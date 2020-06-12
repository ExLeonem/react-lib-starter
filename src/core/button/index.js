import React, { Component } from 'react'
import PropTypes from 'prop-types';


import '../../styles/button.scss';


function Button({children, onClick = null, circle = false, outline = false, appearance = "primary"}) {

    let outlineClass = outline? " outline" : "";
    let appearenceClass = " " + dispatchAppearance(appearance);
    let circleClass = circle? " circle" : "";
    let className = "button" + appearenceClass + outlineClass + circleClass;

    return (
        <div className={className} onClick={onClick} tabIndex="1">
                {children}
        </div>
    );
}


/**
 * Check if appearance class and return valid class.
 * Defaults to primary appearance.
 * 
 * @param {*} style Name of the style class
 * @return {string} Style class name
 */
const dispatchAppearance = (style) => {

    let styleName = style.toLowerCase();
    let styleClasses = ["primary", "secondary", "warning"];
    if (styleClasses.includes(styleName)) {
        return styleName;
    }

    return styleClasses[0];
}


Button.propTypes = {

    /** Something*/
    circle: PropTypes.bool,

    /**The name of the icon */
    icon:PropTypes.string
}


export default Button;