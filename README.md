# Tile Effect with Background and Overlay Text

## Overview

This project demonstrates an interactive tile grid with alternating background and overlay text, utilizing CSS animations and the `anime.js` library. The tiles display a smooth gradient background, and clicking on the tiles triggers a fade effect, where the overlay text fades out and the background text fades in.

## Features

- **Interactive Grid of Tiles**: A responsive grid of tiles that covers the entire viewport.
- **Smooth Gradient Background**: The background features a dynamic gradient that animates across the screen.
- **Alternating Text Effects**: Two layers of text (background and overlay) fade in and out alternately when the tiles are clicked.
- **Custom Fonts and Styles**: The project uses Google Fonts to apply unique styles to specific text elements.

## Technologies Used

- **HTML5**: For the structure of the webpage.
- **CSS3**: For styling the tiles, text, and background, including animations.
- **JavaScript (ES6)**: For handling the interactivity, including the click events and triggering animations.
- **anime.js**: A lightweight JavaScript animation library to create the staggered fade effects for the tiles.

## Installation and Setup

To run this project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/tile-effect.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd tile-effect
    ```
3. **Open `index.html` in your browser**:
    Simply open the `index.html` file in your preferred web browser to view the effect.

## Customization

### Changing Fonts

The fonts for the background and overlay text are set using Google Fonts. To change the fonts:

- Update the `<link>` in the `<head>` of `index.html` to include your desired font.
- Modify the `font-family` property in the CSS for `#background-text`, `#overlay-text`, and any other text elements.

### Modifying the Tile Colors

The tile colors can be customized by modifying the `.tile` class in `styles.css`:

- **Background Color**: Change the `background-color` property to your desired color.
- **Hover Effect**: Adjust the `background-color` in the `.tile:hover` selector to modify the hover state color.

### Adjusting the Grid Layout

The grid is defined using CSS Grid. You can adjust the layout by modifying the following properties in the `#tiles` selector:

- **`grid-gap`**: Controls the spacing between the tiles.
- **Tile Dimensions**: Controlled by the size of each `.tile`. Adjust the width and height if necessary.

## Credits

- **Inspiration**: This project was inspired by the work of [Hyperplexed](https://www.hyperplexed.com/), whose creative web effects served as a reference for the tile grid and animations. Check out their [YouTube channel](https://www.youtube.com/c/Hyperplexed) for more awesome tutorials and projects.
- **Animation Library**: The project uses [anime.js](https://animejs.com/), a powerful animation library that makes it easy to create complex animations.

## Contributions
Contributions are welcome! If you have suggestions for improvements or want to report a bug, feel free to open an issue or submit a pull request.

