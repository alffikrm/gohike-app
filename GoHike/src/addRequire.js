import { createRequire } from "module";
const require = createRequire(import.meta.url);

global.require = require; //this will make require at the global scobe and treat it like the original require

let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })