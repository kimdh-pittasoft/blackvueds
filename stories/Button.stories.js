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

// Base configuration for each variant
const baseArgs = {
  label: 'Button',
  size: 'medium',
};

// Filled Buttons
export const FilledDefault = {
  args: {
    ...baseArgs,
    variant: 'filled',
    color: 'primary',
  },
};

export const FilledPrimary = {
  args: {
    ...FilledDefault.args,
    color: 'primary',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

export const FilledSecondary = {
  args: {
    ...FilledDefault.args,
    color: 'secondary',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

export const FilledDanger = {
  args: {
    ...FilledDefault.args,
    color: 'danger',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

export const FilledViolet = {
  args: {
    ...FilledDefault.args,
    color: 'violet',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

// Outlined Buttons
export const OutlinedDefault = {
  args: {
    ...baseArgs,
    variant: 'outlined',
    color: 'primary',
  },
};

export const OutlinedPrimary = {
  args: {
    ...OutlinedDefault.args,
    color: 'primary',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

export const OutlinedSecondary = {
  args: {
    ...OutlinedDefault.args,
    color: 'secondary',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

export const OutlinedDanger = {
  args: {
    ...OutlinedDefault.args,
    color: 'danger',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

export const OutlinedViolet = {
  args: {
    ...OutlinedDefault.args,
    color: 'violet',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

// Text Buttons
export const TextDefault = {
  args: {
    ...baseArgs,
    variant: 'text',
    color: 'primary',
  },
};

export const TextPrimary = {
  args: {
    ...TextDefault.args,
    color: 'primary',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

export const TextSecondary = {
  args: {
    ...TextDefault.args,
    color: 'secondary',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

export const TextDanger = {
  args: {
    ...TextDefault.args,
    color: 'danger',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

export const TextViolet = {
  args: {
    ...TextDefault.args,
    color: 'violet',
  },
  parameters: {
    controls: { exclude: ['variant', 'color'] },
  },
};

// States for each variant
const createStateStories = (baseStory, name) => ({
  [`${name}Loading`]: {
    args: {
      ...baseStory.args,
      loading: true,
    },
    parameters: {
      controls: { exclude: ['variant', 'color'] },
    },
  },
  [`${name}Disabled`]: {
    args: {
      ...baseStory.args,
      disabled: true,
    },
    parameters: {
      controls: { exclude: ['variant', 'color'] },
    },
  },
});

// Generate state stories for each variant
export const {
  FilledPrimaryLoading,
  FilledPrimaryDisabled,
} = createStateStories(FilledPrimary, 'FilledPrimary');

export const {
  OutlinedPrimaryLoading,
  OutlinedPrimaryDisabled,
} = createStateStories(OutlinedPrimary, 'OutlinedPrimary');

export const {
  TextPrimaryLoading,
  TextPrimaryDisabled,
} = createStateStories(TextPrimary, 'TextPrimary');

// Sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...baseArgs} size="small" label="Small" />
      <Button {...baseArgs} size="medium" label="Medium" />
      <Button {...baseArgs} size="large" label="Large" />
    </div>
  ),
};

// Icons
export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...baseArgs} leftIcon="settings" label="Settings" />
      <Button {...baseArgs} rightIcon="arrow_forward" label="Next" />
      <Button {...baseArgs} leftIcon="settings" rightIcon="arrow_forward" label="Configure" />
    </div>
  ),
};
