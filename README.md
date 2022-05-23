# ff
 Repository for foodFeed 
 
 To run this webapp locally, you need to first run the server & then start the React app. 
 
 Keeping this in mind, the repository is structured as follows:

## Structure of the Repository

- `server/` - This contains the code for the server
- `client/` - While this contains the code for the React app

## How to run locally

0. Requirements: node, git.
1. Then in the terminal, run `npm install` at this directory level (i.e. `ff/`) & at the directory level of the React app (i.e. under `ff/client/`).
2. Then `cd` back to the level of `ff/` and run `npm start`. You should see the following output in the terminal: `Server is listening on 3001`. This indicates that the server is up & running.
3. Now to start up the react app, open a new window of the terminal (assuming that you are at the directory level of `ff/`), then move into the client sub-directory of client using `cd client` and then run `npm start`. If all goes well, you should see the following message: `Compiled successfully!` and the location at which you can view the webapp on your browser.

Note:
More info on the react app (along with useful npm commands under `ff/client/README.md`, if this is your first time using `node`/`npm` package manager/`react`, strongly advised to go though this.
