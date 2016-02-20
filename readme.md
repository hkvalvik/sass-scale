# Sass scale

Scale css properties responsively with a single `@include`.

## Usage

    body {
      &
      // A single property
      @include scale(padding);

      // Several properties
      @include scale(top, left);

      // Multiply rendered values by two
      @include scale(2, border-width);

      // Render negative values
      @include scale(-1, margin-left, margin-right);
    }

## Settings

All media queries and values can be configured like this:

    $scale-small: (
            query:  '(max-width: 639px)',
            top:    16px,
            right:  12px,
            bottom: 16px,
            left:   12px);

    $scale-medium: (
            query:  '(min-width: 640px) and (max-width: 1279px)',
            top:    24px,
            right:  16px,
            bottom: 24px,
            left:   16px);

    $scale-large: (
            query:  '(min-width: 1280px)',
            top:    32px,
            right:  24px,
            bottom: 32px,
            left:   24px);

    $scale-settings: $scale-small, $scale-medium, $scale-large;

    @import 'sass-scale/index';

## Example output

**Scss**

    body {
      @include scale(padding);
    }

**Css**

    @media (max-width: 639px) {
      body { padding: 15px 10px 15px 10px }
    }

    @media (min-width: 640px) and (max-width: 1279px) {
      body { padding: 25px 20px 25px 20px }
    }

    @media (min-width: 1280px) {
      body { padding: 30px 25px 30px 25px }
    }

## Supported properties

    padding
    padding-top
    padding-right
    padding-bottom
    padding-left

    margin
    margin-top
    margin-right
    margin-bottom
    margin-left

    border-width
    border-top-width
    border-right-width
    border-bottom-width
    border-left-width

    top
    right
    bottom
    left