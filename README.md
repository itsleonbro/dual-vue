# DualVue

A React component for comparing two images with a slider.

## Installation

```bash
npm install dualvue
```

## Usage

```jsx
import { DualVue } from 'dualvue';

{/* Basic usage with defaults (800x400px) */}
function BasicExample() {
  return (
    <DualVue
      firstImage="path/to/first/image.jpg"
      secondImage="path/to/second/image.jpg"
    />
  );
}

{/* Custom styling example */}
function CustomExample() {
  return (
    <DualVue
      firstImage="path/to/first/image.jpg"
      secondImage="path/to/second/image.jpg"
      width="1000px"
      height="600px"
      style={{ border: '1px solid #ccc' }}
      className="custom-class"
    />
  );
}
```

## Props

| Prop              | Type   | Required | Default | Description                         |
| ----------------- | ------ | -------- | ------- | ----------------------------------- |
| `firstImage`      | string | Yes      | -       | URL of the first image              |
| `secondImage`     | string | Yes      | -       | URL of the second image             |
| `initialPosition` | number | No       | 50      | Initial slider position (0-100)     |
| `sliderColor`     | string | No       | 'white' | Color of the slider bar             |
| `sliderWidth`     | number | No       | 2       | Width of the slider bar in pixels   |
| `buttonSize`      | number | No       | 40      | Size of the slider button in pixels |
| `width`           | string | No       | '800px' | Width of the component              |
| `height`          | string | No       | '400px' | Height of the component             |
| `className`       | string | No       | ''      | Additional CSS class names          |
| `style`           | object | No       | {}      | Additional inline styles            |
