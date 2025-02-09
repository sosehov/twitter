# Tweeter Project

Tweeter is a simple, single-page Twitter clone. The app has been made responsive using Layout Shifter design pattern. 

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser 1.20.3 or above
- Chance 1.1.12 or above
- MD5 2.3.0

## Dev Dependencies

- Nodemon 1.19.4

## Release Notes

- Mobile mode not implemented 
- Stretch: When user clicks the Compose('Write a new Tweet') button in the Navigation Bar:
  * If the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
  * If the Compose Tweet box is currently showing, then it is hidden
  * In either case, transitions between 'shown' and 'hidden' states is animated

## Screenshots

!["Screenshot of Twitter app in Desktop mode"](https://github.com/sosehov/twitter/blob/master/docs/Tweeter-Desktop%20mode.png?raw=true)
!["Screenshot of Twitter app in Tablet mode"](https://github.com/sosehov/twitter/blob/master/docs/Tweeter-Tablet%20mode.png?raw=true)
!["Screenshot of Error message-Empty Tweet"](https://github.com/sosehov/twitter/blob/master/docs/Error%20message-Empty%20Tweet.png?raw=true)
!["Screenshot of Error message-Long Tweet"](https://github.com/sosehov/twitter/blob/master/docs/Error%20message-%20Long%20Tweet.png?raw=true)
