const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const projectDirectory = path.join(__dirname, "Projeto Guilherme");
const portArgumentIndex = process.argv.findIndex((argument) => argument === "--port" || argument === "-p");
const portArgument = portArgumentIndex >= 0 ? process.argv[portArgumentIndex + 1] : null;
const inlinePortArgument = process.argv.find((argument) => argument.startsWith("--port="));
const port = Number(process.env.PORT || portArgument || inlinePortArgument?.split("=")[1]) || 3000;

const contentTypes = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
};

function fileForRequest(requestPath) {
    if (requestPath === "/" || requestPath === "/index.html") {
        return path.join(projectDirectory, "index.html");
    }

    if (requestPath === "/style.css") {
        return path.join(projectDirectory, "style.css");
    }

    if (requestPath.startsWith("/Imagens/")) {
        return path.join(projectDirectory, requestPath.slice(1));
    }

    if (requestPath.startsWith("/Projeto Guilherme/")) {
        return path.join(__dirname, requestPath.slice(1));
    }

    return null;
}

function isInsideProject(filePath) {
    const relativePath = path.relative(projectDirectory, filePath);
    return relativePath && !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
}

const server = http.createServer((request, response) => {
    let requestPath;

    try {
        requestPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    } catch {
        response.writeHead(400);
        response.end("Bad request");
        return;
    }

    const filePath = fileForRequest(requestPath);

    if (!filePath || !isInsideProject(path.resolve(filePath))) {
        response.writeHead(404);
        response.end("Not found");
        return;
    }

    fs.stat(filePath, (error, stats) => {
        if (error || !stats.isFile()) {
            response.writeHead(404);
            response.end("Not found");
            return;
        }

        const extension = path.extname(filePath).toLowerCase();
        response.writeHead(200, {
            "Content-Type": contentTypes[extension] || "application/octet-stream",
            "Cache-Control": "no-cache",
        });
        fs.createReadStream(filePath).pipe(response);
    });
});

server.listen(port, "0.0.0.0", () => {
    console.log(`Preview disponível em http://localhost:${port}`);
});