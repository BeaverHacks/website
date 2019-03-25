# OSU Hackathon Club Website

This repository contains the main website for the OSU Hackathon Club, also known as BeaverHacks.

## Technology

This website is powered by [Zeit Now](https://zeit.co/now), and build with [NextJS](https://nextjs.org/). Styling is powered by [Emotion](https://emotion.sh) and [Rebass](https://rebassjs.org).

## Development

To work on the project locally, all you need to do is run the below commands in a CLI of your choice:

```sh
# Clone the repository
git clone https://github.com/Beaverhacks/website beaverhacks-website

# Move into the directory
cd beaverhacks-website

# Install the dependencies
yarn

# Start a development server
yarn start
```

Then visit http://localhost:3000 in your browser to see your changes live.

## Deployment

Deployment is 100% handled by Now — when commits are pushed to `master`, Now will automatically redeploy our website. You can reach live versions of the website at any of the following URLs:

- https://osuhacks.com
- https://beaverhacks.now.sh
- https://osuhackathonclub.now.sh
