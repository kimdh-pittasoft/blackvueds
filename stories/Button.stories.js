import React from 'react';
import Button from './Button';
import './Button.css';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'violet'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    isBox: { control: 'boolean' },
    leftIcon: { control: 'text' },
    rightIcon: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

// Default story
export const Default = {
  args: {
    label: 'Button',
    color: 'primary',
    variant: 'filled',
    size: 'medium',
  },
};

// Color variants
export const Primary = {
  args: {
    ...Default.args,
    color: 'primary',
  },
};

export const Secondary = {
  args: {
    ...Default.args,
    color: 'secondary',
  },
};

export const Danger = {
  args: {
    ...Default.args,
    color: 'danger',
  },
};

export const Violet = {
  args: {
    ...Default.args,
    color: 'violet',
  },
};

// Style variants
export const Filled = {
  args: {
    ...Default.args,
    variant: 'filled',
  },
};

export const Outlined = {
  args: {
    ...Default.args,
    variant: 'outlined',
  },
};

export const Text = {
  args: {
    ...Default.args,
    variant: 'text',
  },
};

// Sizes
export const Small = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Medium = {
  args: {
    ...Default.args,
    size: 'medium',
  },
};

export const Large = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

// States
export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Loading = {
  args: {
    ...Default.args,
    loading: true,
  },
};

// Icons
export const WithLeftIcon = {
  args: {
    ...Default.args,
    leftIcon: 'settings',
  },
};

export const WithRightIcon = {
  args: {
    ...Default.args,
    rightIcon: 'arrow_forward',
  },
};

export const WithBothIcons = {
  args: {
    ...Default.args,
    leftIcon: 'settings',
    rightIcon: 'arrow_forward',
  },
};

// Box style
export const BoxStyle = {
  args: {
    ...Default.args,
    isBox: true,
  },
};
