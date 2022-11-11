// .storybook/manager.js

import { addons } from '@storybook/addons';
import systemlogic from './systemlogic';

addons.setConfig({
  theme: systemlogic,
});