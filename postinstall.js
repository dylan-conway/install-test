import { writeFile, rm } from "fs/promises";

await rm("postinstall.txt", { force: true });
await writeFile("hello.txt", "hello postinstall!");
