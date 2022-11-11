import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Button from '../../../components/Button'
import {ReactComponent as Google} from '../../../assets/images/google.svg'

export default {
    title: "Components/Button/Example",
    component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = (args: any) => <Button {...args}>
    <button onClick={() => console.log("hi")}>Get Started</button>
</Button>
Primary.args = {
    state: "primary",
}

export const Secondary = (args: any) => <Button {...args}>
    <button onClick={() => console.log("hi")}>Sign In</button>
</Button>
Secondary.args = {
    state: "secondary",
}

export const Alternative = (args: any) => <Button {...args}>
    <a href="htpps://www.google.com" target="_blank" rel="noopener noreferrer">
    <Google />
    <span className="ml-2">Sign In with Google</span>
    </a>
</Button>
Alternative.args = {
    state: "alternative",
    className: "border-2 border-[#E8E7E7]"
}