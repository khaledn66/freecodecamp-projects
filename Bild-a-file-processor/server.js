const fsPromises = require("fs/promises");

async function read() {
  const data = await fsPromises.readFile("assets/poem.txt", {
    encoding: "utf8",
  });

  console.log(data);
}

read();

const fs = require("fs");

function WriteFile() {
  fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp");

  fs.appendFileSync("assets/output.txt", "\nSecond line");

  const exists = fs.existsSync("assets/output.txt");
  console.log(exists);

  const entries = fs.readdirSync("assets");
  console.log(entries);
}

WriteFile();

function buffer() {
  const buf = Buffer.from("Hello, Node!");

  console.log(buf);
  console.log(buf.toString("hex")); // 48656c6c6f
  console.log(buf.toString("base64"))
  const bufalloc = Buffer.alloc(8,  0xff);
console.log(bufalloc);
const decoded = Buffer.from("SGVsbG8sIE5vZGUh", "base64").toString("utf8");
console.log(decoded);
}

buffer();
function hash(){
  const crypto = require("crypto");
  const hash = crypto.createHash("sha256").update("hello").digest("hex");
  console.log(hash); 
}
hash();
function random (){
  const crypto = require("crypto");
  const random = crypto.randomBytes(16).toString("hex");
  console.log("random_Bytes=",random); // e.g. 4f3a9c1b8e2d7a05
  const id = crypto.randomUUID();
console.log("ID=", id);
} 
random();
function system(){
  //Task17
  //The os module provides information about the operating system. Require it like any other module:
  const os = require("os");
  //Task18
  console.log("platform",os.platform()); 
  console.log("arch ", os.arch()); 
  console.log("hostname",os.hostname()); 
  console.log("uptime=",os.uptime());
  console.log("totalmem",os.totalmem());
  console.log("freemem",os.freemem());
  console.log("totalmem",os.totalmem());
  console.log(" cpus", os.cpus().length); 
}

system(); 
function path(){
const path = require("path");
const p = path.join(__dirname, "assets", "poem.txt");
console.log("fullpath=",p);
console.log("basename" ,path.basename(p));
console.log("dirname",path.dirname(p));
console.log("ext",path.extname(p));
console.log("pjoin",path.join("assets", "..", "server.js")); 
console.log("presolve",path.resolve("assets", "..", "server.js")); 
const parts = path.parse(p);
console.log("parts",parts);
}
path();
function process_indentify(){
  console.log("Node.js version:", process.version);
  console.log("Platform:", process.platform);
  console.log("Environment:", process.env);
}
process_indentify();
function argv_pass() {
  console.log(process.argv);
  console.log("ARGUMENT:", process.argv[2]);
}

argv_pass();
function std_out(){
  process.stdout.write("Hello ");
process.stdout.write("World\n"); // newline only when you add \n
process.stderr.write("Something went wrong\n");
}
std_out();

function str_eam(){
  const fs = require("fs");
  const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });

readable.on("data", (chunk) => {
  console.log(chunk);
});

readable.on("end", () => {
  console.log("Done reading");
});
const writable = fs.createWriteStream("assets/stream-output.txt");
writable.write("First chunk\n");
writable.write("Second chunk\n");
writable.end();
}
str_eam();

//function stream_pipe (){
 // const fs = require("fs");
 // const readable = fs.createReadStream("assets/poem.txt");
 // const writable = fs.createWriteStream("assets/stream-output3.txt");
//readable.pipe(writable);
//console.log(" data are ready");
//}
//stream_pipe();
const readable = fs.createReadStream("assets/poem.txt");
  const writable = fs.createWriteStream("assets/stream-output.txt");
readable.pipe(writable);
console.log(" data are ready");