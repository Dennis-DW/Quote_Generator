
# Random Quote Generator

This is a simple web application that generates random quotes fetched from an external API. Users can click a button to fetch a new quote, and they have the option to share the quote on Twitter.

## Features

- **Random Quote Generation**: Users can fetch a new random quote by clicking a button.
- **Author Display**: The application displays the author of each quote, if available.
- **Quote Length Styling**: Quotes with a length exceeding 130 characters are styled differently for better readability.
- **Twitter Sharing**: Users can easily share quotes on Twitter with a single click.

## Components

- **quoteContainer**: Container element to display the quote and author.
- **quoteText**: Element to display the quote text.
- **authorText**: Element to display the author's name.
- **twitterBtn**: Button to share the current quote on Twitter.
- **newQuoteBtn**: Button to fetch a new random quote.
- **loader**: Element to display a loading indicator while fetching quotes.

## Usage

1. Click the "New Quote" button to fetch a new random quote.
2. Optionally, click the Twitter icon to share the current quote on Twitter.

## Implementation Details

- The application fetches quotes from the [Type.fit](https://type.fit/api/quotes) API asynchronously using the `fetch()` function.
- The fetched quotes are stored in the `apiQuotes` array for later use.
- The `newQuote()` function is responsible for fetching a new random quote, updating the quote text and author display, and styling the quote based on its length.
- The `tweetQuote()` function constructs a Twitter sharing URL using the quote text and author's name, allowing users to share the quote on Twitter.
- The application includes a loading indicator (`loader`) that is displayed while quotes are being fetched.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/Dennis-DW/Quote_Generator.git
    
    ```

2. Open the `index.html` file in a web browser to use the application.

## Technologies Used

- JavaScript
- Fetch API

## Credits

This project is inspired by various random quote generator applications available online.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
