import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/bggknJrC6bRFYFiyypPW0t/Design-System?node-id=16790-15193'
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      control: 'text',
      description: '버튼에 표시될 텍스트'
    },
    color: {
      control: 'select',
      options: ['blue', 'red', 'green', 'gray'],
      description: '버튼의 색상'
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
      description: '버튼의 스타일 변형'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기'
    },
    leftIcon: {
      control: 'boolean',
      description: '왼쪽 아이콘 표시 여부'
    },
    rightIcon: {
      control: 'boolean',
      description: '오른쪽 아이콘 표시 여부'
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 상태'
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태'
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
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Button',
    color: 'blue',
    variant: 'filled',
    size: 'medium'
  }
};

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button label="Primary" color="blue" />
      <Button label="Danger" color="red" />
      <Button label="Success" color="green" />
      <Button label="Secondary" color="gray" />
    </div>
  )
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button label="Filled" variant="filled" />
      <Button label="Outlined" variant="outlined" />
      <Button label="Text" variant="text" />
    </div>
  )
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button label="Small" size="small" />
      <Button label="Medium" size="medium" />
      <Button label="Large" size="large" />
    </div>
  )
};

export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button label="Left Icon" leftIcon={true} />
      <Button label="Right Icon" rightIcon={true} />
      <Button label="Both Icons" leftIcon={true} rightIcon={true} />
    </div>
  )
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button label="Normal" />
      <Button label="Disabled" disabled={true} />
      <Button label="Loading" loading={true} />
    </div>
  )
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Filled Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button label="Primary" color="blue" variant="filled" />
          <Button label="Danger" color="red" variant="filled" />
          <Button label="Success" color="green" variant="filled" />
          <Button label="Secondary" color="gray" variant="filled" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Outlined Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button label="Primary" color="blue" variant="outlined" />
          <Button label="Danger" color="red" variant="outlined" />
          <Button label="Success" color="green" variant="outlined" />
          <Button label="Secondary" color="gray" variant="outlined" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Text Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button label="Primary" color="blue" variant="text" />
          <Button label="Danger" color="red" variant="text" />
          <Button label="Success" color="green" variant="text" />
          <Button label="Secondary" color="gray" variant="text" />
        </div>
      </div>
    </div>
  )
};
