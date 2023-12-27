import { initializeApp } from "./main";

// create a new dev element for react to attach, and add it to the doc body
const rootElem = document.createElement("div")
document.body.appendChild(rootElem)

// call the init with this new element
initializeApp(rootElem)

console.log('[index.ts] initialized app')
