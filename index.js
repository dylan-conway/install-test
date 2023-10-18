import fs from "fs/promises";
import path from "path";
console.log("moooooo");
await fs.writeFile(path.join(import.meta.dir, "moo.txt"), "moooooo");
