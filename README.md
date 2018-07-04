<h1 align="center">Eth User Directory App</h1>

<p>This is a simple Vue.js decentralized app (dApp) to demonstrate the underpinnings of a user management system on the Ethereum blockchain. Eth Users can register with the dApp, view wallet details privately, and update/broadcast status on the network.The dApp utilizes Truffle, Metamask and Ganache to develop contracts:</p> 

<p align="center">
<img src="https://ucarecdn.com/b787bba8-3f2d-47b3-8073-76c830fc023e/" width="40%" height="30%" />
</p>

## Demo on Ganache

<p align="center">
  <img src="https://ucarecdn.com/28224a75-44bc-4d68-853a-74ffb6b4c8ce/" width="70%" height="60%" />
</p>
<br>
<p align="center">
  <img src="https://ucarecdn.com/0a3f450e-a356-4dc1-9724-77f5aa1ada98/" width="70%" height="60%" />
</p>

<b>Note:</b> Running this repo locally requires:
- Ganache or a local blockchain running
- NPM version 5.8.0
- TRUFFLE verson 4.1.5
- Metamask browser extention

<b>Live demo hosted on Heroku:</b> https://user-directory-app.herokuapp.com/



## Running and Testing 
Once Metamask and Ganache are installed and running: <br>

<b>1. Clone this repo:</b><br>

```
$ git clone https://github.com/codeamt/Eth-User-Directory-App.git
```
<br>

<b>2. Install dependencies:</b> <br>

(Contract development dependencies)<br>
```
$ truffle compile && truffle migrate
```
<br>

<p>This auto generates and makes accessible a duplicate of the compiled Users solidity contract in app-users/src/assets called UsersContract.json to the Vue.js frontend.<br><br>Then in the terminal: </p>

```
$ cd app-users && npm install
```
<br>

<b>3. Run the project </b><br>

To get the app going on port 8080 (by default, or whichever port you decide), run:<br>

```
$ npm run dev
```


