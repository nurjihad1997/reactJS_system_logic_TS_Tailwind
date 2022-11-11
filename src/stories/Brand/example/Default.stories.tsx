import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Brand from '../../../components/Brand'

export default {
    title: "Components/Brand/Example",
    component: Brand,
} as ComponentMeta<typeof Brand>;

export const Dark = (args: any) => 
<div className="bg-green min-h-min w-full p-10">
<Brand {...args} className="w-32 h-16"/>
</div>
Dark.args = {
    color: "dark",
}

export const Light = (args: any) => 
<div className="bg-darkblue min-h-min w-full p-10">
<Brand {...args} className="w-32 h-16"/>
</div>
Light.args = {
    color: "light",
}

