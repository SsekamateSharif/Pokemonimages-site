# Pokémon Image Finder

A simple web application that allows users to search for Pokémon by name and display their corresponding images. The project uses the **PokéAPI** to fetch Pokémon data dynamically based on the Pokémon name entered by the user.

## Features

* Search for a Pokémon by name.
* Fetch Pokémon data from the PokéAPI.
* Display the Pokémon's image dynamically.
* Handle user input through JavaScript.
* Uses asynchronous JavaScript with `fetch()` and `async/await`.
* Simple and responsive user interface.

## Technologies Used

* **HTML** – Used to create the structure of the website.
* **CSS** – Used to style the website and its components.
* **JavaScript** – Used to handle user input, API requests, and dynamically update the Pokémon image.
* **PokéAPI** – Used as the source of Pokémon data.

## How It Works

1. The user enters the name of a Pokémon into the search input.
2. JavaScript reads the value entered by the user.
3. The application sends a request to the PokéAPI using `fetch()`.
4. The API returns information about the requested Pokémon.
5. JavaScript extracts the Pokémon's image URL from the response.
6. The image is displayed on the website.

## API

This project uses the PokéAPI:

`https://pokeapi.co/`

## Example

If the user searches for:

```text
pikachu
```

The application fetches Pikachu's data from the API and displays Pikachu's image on the page.

## Purpose of the Project

I built this project to practice working with **JavaScript APIs, asynchronous JavaScript, promises, `fetch()`, `async/await`, DOM manipulation, and user input** while building a simple interactive web application.

## Author
SSEKAMATE SHARIF 