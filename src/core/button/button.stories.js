import React from 'react'
import Button from './index';

import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';

export default {
    title: "Button",
    component: Button,
    excludeStories: /.*Data$/
};


export const taskData = {
    outline: "True | false"
};


export const actionsData = {
    onClick: action('onClick')
}

// export const all = () => (
//    <Preview name="hey">
//         <Button id="filled" mode="filled">Filled Button</Button>  
//    </Preview>
// );


/**
 * Differently rednered buttons
 */
export const primary = () => <Button id="primary filled" {...actionsData}>Primary Button</Button>
export const outline = () => <Button id="primary outlined" outline={true}>Outline Button</Button>
export const secondary = () => <Button id="seconday filled" appearance="secondary">Secondary Button</Button>