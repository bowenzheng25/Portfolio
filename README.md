Copied from Ryan Fitzgerald, improved with a few tweaks

# Setting Up
I used a macbook, so this was my process:

- Downloaded Github Desktop for friendly GUI interface
- Cloned a repo on my computer
- Opened terminal and change directory into this project folder
- Ran the following code:

```
npm install tailwindcss @tailwindcss/vite
rm -rf package-lock.json node_modules
npm install
nvm install 18.20.8 
nvm use 18 
npm run dev 
```
- Open the website that's being hosted locally

Doing this allowed me to make changes and see them in real time before uploading to Github
