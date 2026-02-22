import type { Meta, StoryObj } from '@storybook/react-vite';

import TaskInProgressModal from "./TaskInProgressModal.tsx";

const meta = {
    component: TaskInProgressModal,
} satisfies Meta<typeof TaskInProgressModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
