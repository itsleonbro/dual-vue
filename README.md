# DualVue

A React component for comparing two images with a slider.

## Installation

```bash
npm install dualvue
```

## Usage

```bash
import { DualVue } from 'dualvue';

function App() {
  return (
    <DualVue
      firstImage="path/to/first/image.jpg"
      secondImage="path/to/second/image.jpg"
      initialPosition={50}
      sliderColor="white"
      sliderWidth={2}
      buttonSize={40}
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
