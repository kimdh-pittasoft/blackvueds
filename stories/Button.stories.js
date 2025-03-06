// Button.stories.js
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'danger', 'success', 'warning', 'info', 'purple'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
};

// 템플릿 정의
const Template = (args) => <Button {...args} />;

// 라이트 테마 버튼들
export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  theme: 'light',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'primary',
  theme: 'light',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  variant: 'danger',
  theme: 'light',
};

export const Purple = Template.bind({});
Purple.args = {
  label: 'Button',
  variant: 'purple',
  theme: 'light',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'sm',
  theme: 'light',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'md',
  theme: 'light',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'lg',
  theme: 'light',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
  theme: 'light',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  loading: true,
  theme: 'light',
};

// 다크 테마 버튼들
export const DefaultDark = Template.bind({});
DefaultDark.args = {
  label: 'Button',
  theme: 'dark',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  label: 'Button',
  variant: 'primary',
  theme: 'dark',
};

export const DangerDark = Template.bind({});
DangerDark.args = {
  label: 'Button',
  variant: 'danger',
  theme: 'dark',
};

export const PurpleDark = Template.bind({});
PurpleDark.args = {
  label: 'Button',
  variant: 'purple',
  theme: 'dark',
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
  label: 'Button',
  disabled: true,
  theme: 'dark',
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  label: 'Button',
  loading: true,
  theme: 'dark',
};

// 아이콘과 함께 사용하는 예시 (React Icons 사용 가정)
export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button',
  theme: 'light',
  icon: '👍', // 실제 구현에서는 <BiLike /> 등의 아이콘 컴포넌트 사용
  iconPosition: 'left',
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  label: 'Button',
  theme: 'light',
  icon: '👉', // 실제 구현에서는 <BiRightArrow /> 등의 아이콘 컴포넌트 사용
  iconPosition: 'right',
};