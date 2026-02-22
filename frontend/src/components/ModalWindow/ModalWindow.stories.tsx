import type { Meta, StoryObj } from '@storybook/react-vite';

import ModalWindow from './ModalWindow';

const meta = {
    component: ModalWindow,
} satisfies Meta<typeof ModalWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};