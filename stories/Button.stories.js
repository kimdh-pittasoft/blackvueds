import React from 'react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import './Button.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1A1A1A' }
      ]
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
      description: 'Button style variant'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Button color scheme'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size'
    },
    label: {
      control: 'text',
      description: 'Button label'
    },
    leftIcon: {
      control: 'text',
      description: 'Material icon name for left icon'
    },
    rightIcon: {
      control: 'text',
      description: 'Material icon name for right icon'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: '버튼의 HTML type 속성'
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Button',
    variant: 'filled',
    color: 'primary',
    size: 'medium'
  }
};

export const PrimaryButtons = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-on-light)' }}>Default</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" color="primary" label="Button" />
          <Button variant="filled" color="primary" label="Button" leftIcon="settings" />
          <Button variant="filled" color="primary" label="Button" rightIcon="arrow_forward" />
          <Button variant="filled" color="primary" label="Button" disabled />
          <Button variant="filled" color="primary" label="Button" loading />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-on-light)' }}>Hover</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" color="primary" label="Button" className="hover" />
          <Button variant="filled" color="primary" label="Button" leftIcon="settings" className="hover" />
          <Button variant="filled" color="primary" label="Button" rightIcon="arrow_forward" className="hover" />
          <Button variant="filled" color="primary" label="Button" disabled className="hover" />
          <Button variant="filled" color="primary" label="Button" loading className="hover" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-on-light)' }}>Pressed</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" color="primary" label="Button" className="pressed" />
          <Button variant="filled" color="primary" label="Button" leftIcon="settings" className="pressed" />
          <Button variant="filled" color="primary" label="Button" rightIcon="arrow_forward" className="pressed" />
          <Button variant="filled" color="primary" label="Button" disabled className="pressed" />
          <Button variant="filled" color="primary" label="Button" loading className="pressed" />
        </div>
      </div>
    </div>
  )
};

export const SecondaryButtons = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-on-light)' }}>Default</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="outlined" color="secondary" label="Button" />
          <Button variant="outlined" color="secondary" label="Button" leftIcon="settings" />
          <Button variant="outlined" color="secondary" label="Button" rightIcon="arrow_forward" />
          <Button variant="outlined" color="secondary" label="Button" disabled />
          <Button variant="outlined" color="secondary" label="Button" loading />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-on-light)' }}>Hover</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="outlined" color="secondary" label="Button" className="hover" />
          <Button variant="outlined" color="secondary" label="Button" leftIcon="settings" className="hover" />
          <Button variant="outlined" color="secondary" label="Button" rightIcon="arrow_forward" className="hover" />
          <Button variant="outlined" color="secondary" label="Button" disabled className="hover" />
          <Button variant="outlined" color="secondary" label="Button" loading className="hover" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-on-light)' }}>Pressed</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="outlined" color="secondary" label="Button" className="pressed" />
          <Button variant="outlined" color="secondary" label="Button" leftIcon="settings" className="pressed" />
          <Button variant="outlined" color="secondary" label="Button" rightIcon="arrow_forward" className="pressed" />
          <Button variant="outlined" color="secondary" label="Button" disabled className="pressed" />
          <Button variant="outlined" color="secondary" label="Button" loading className="pressed" />
        </div>
      </div>
    </div>
  )
};

export const DangerButtons = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-on-light)' }}>Default</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" color="danger" label="Button" />
          <Button variant="filled" color="danger" label="Button" leftIcon="settings" />
          <Button variant="filled" color="danger" label="Button" rightIcon="arrow_forward" />
          <Button variant="filled" color="danger" label="Button" disabled />
          <Button variant="filled" color="danger" label="Button" loading />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-on-light)' }}>Hover</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" color="danger" label="Button" className="hover" />
          <Button variant="filled" color="danger" label="Button" leftIcon="settings" className="hover" />
          <Button variant="filled" color="danger" label="Button" rightIcon="arrow_forward" className="hover" />
          <Button variant="filled" color="danger" label="Button" disabled className="hover" />
          <Button variant="filled" color="danger" label="Button" loading className="hover" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-on-light)' }}>Pressed</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" color="danger" label="Button" className="pressed" />
          <Button variant="filled" color="danger" label="Button" leftIcon="settings" className="pressed" />
          <Button variant="filled" color="danger" label="Button" rightIcon="arrow_forward" className="pressed" />
          <Button variant="filled" color="danger" label="Button" disabled className="pressed" />
          <Button variant="filled" color="danger" label="Button" loading className="pressed" />
        </div>
      </div>
    </div>
  )
};

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Primary</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button color="primary" variant="filled" label="Filled" />
          <Button color="primary" variant="outlined" label="Outlined" />
          <Button color="primary" variant="text" label="Text" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Secondary</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button color="secondary" variant="filled" label="Filled" />
          <Button color="secondary" variant="outlined" label="Outlined" />
          <Button color="secondary" variant="text" label="Text" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Danger</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button color="danger" variant="filled" label="Filled" />
          <Button color="danger" variant="outlined" label="Outlined" />
          <Button color="danger" variant="text" label="Text" />
        </div>
      </div>
    </div>
  )
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Filled</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" size="small" label="Small" />
          <Button variant="filled" size="medium" label="Medium" />
          <Button variant="filled" size="large" label="Large" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Outlined</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="outlined" size="small" label="Small" />
          <Button variant="outlined" size="medium" label="Medium" />
          <Button variant="outlined" size="large" label="Large" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Text</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="text" size="small" label="Small" />
          <Button variant="text" size="medium" label="Medium" />
          <Button variant="text" size="large" label="Large" />
        </div>
      </div>
    </div>
  )
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Small</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button size="small" label="Button" />
          <Button size="small" leftIcon="add" label="Button" />
          <Button size="small" rightIcon="arrow_forward" label="Button" />
          <Button size="small" loading label="Button" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Medium</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button size="medium" label="Button" />
          <Button size="medium" leftIcon="add" label="Button" />
          <Button size="medium" rightIcon="arrow_forward" label="Button" />
          <Button size="medium" loading label="Button" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Large</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button size="large" label="Button" />
          <Button size="large" leftIcon="add" label="Button" />
          <Button size="large" rightIcon="arrow_forward" label="Button" />
          <Button size="large" loading label="Button" />
        </div>
      </div>
    </div>
  )
};

export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Left Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button leftIcon="add" label="Add Item" />
          <Button leftIcon="edit" label="Edit" />
          <Button leftIcon="delete" label="Delete" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Right Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button rightIcon="arrow_forward" label="Next" />
          <Button rightIcon="open_in_new" label="Open" />
          <Button rightIcon="download" label="Download" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Both Sides</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button leftIcon="cloud_upload" rightIcon="arrow_forward" label="Upload" />
          <Button leftIcon="search" rightIcon="tune" label="Search" />
          <Button leftIcon="folder" rightIcon="more_vert" label="Browse" />
        </div>
      </div>
    </div>
  )
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Normal</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" label="Filled" />
          <Button variant="outlined" label="Outlined" />
          <Button variant="text" label="Text" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Disabled</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" disabled label="Filled" />
          <Button variant="outlined" disabled label="Outlined" />
          <Button variant="text" disabled label="Text" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Loading</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="filled" loading label="Filled" />
          <Button variant="outlined" loading label="Outlined" />
          <Button variant="text" loading label="Text" />
        </div>
      </div>
    </div>
  )
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Filled Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button label="Primary" color="primary" variant="filled" />
          <Button label="Secondary" color="secondary" variant="filled" />
          <Button label="Danger" color="danger" variant="filled" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Outlined Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button label="Primary" color="primary" variant="outlined" />
          <Button label="Secondary" color="secondary" variant="outlined" />
          <Button label="Danger" color="danger" variant="outlined" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Text Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button label="Primary" color="primary" variant="text" />
          <Button label="Secondary" color="secondary" variant="text" />
          <Button label="Danger" color="danger" variant="text" />
        </div>
      </div>
    </div>
  )
};
