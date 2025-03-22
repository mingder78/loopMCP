# loopmcp

loopMCP is just for you to test with your mcp server in Typescript code. run my demo mcp server code before you run this loopMCP.

## install and run

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.20. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# AI help

https://x.com/i/grok/share/d51VHWYOTCfbCMWNNU980iD8t


# on ming-mcp-server

repo: 
https://github.com/mingder78/ming-mcp-server


## do connect in command line with mcp inspector

build and run inspector

```bash
bun i
bun run build
bun run inspector
```

on the other terminal, run (to do connection and get a sessionId), use this sessionId in loopMCP to run mcp queries.

```bash
curl http://localhost:3000/sse\?transportType\=stdio\&command\=build%2Findex.js\&args\=run+mcp-server-time\&env\=%7B%22HOME%22%3A%22%2FUsers%2Fming-derwang%22%2C%22LOGNAME%22%3A%22ming%22%2C%22PATH%22%3A%22%2Fprivate%2Ftmp%2Fbunx-501-%40modelcontextprotocol%2Finspector%40latest%2Fnode_modules%2F.bin%3A%2Fprivate%2Ftmp%2Fming-mcp-server%2Fnode_modules%2F.bin%3A%2Fprivate%2Ftmp%2Fming-mcp-server%2Fnode_modules%2F.bin%3A%2Fprivate%2Ftmp%2Fnode_modules%2F.bin%3A%2Fprivate%2Fnode_modules%2F.bin%3A%2Fnode_modules%2F.bin%3A%2Fprivate%2Ftmp%2Fming-mcp-server%2Fnode_modules%2F.bin%3A%2Fprivate%2Ftmp%2Fming-mcp-server%2Fnode_modules%2F.bin%3A%2Fprivate%2Ftmp%2Fnode_modules%2F.bin%3A%2Fprivate%2Fnode_modules%2F.bin%3A%2Fnode_modules%2F.bin%3A%2FUsers%2Fming-derwang%2FDownloads%2Fgoogle-cloud-sdk%2Fbin%3A%2FUsers%2Fming-derwang%2F.local%2Fbin%3A%2Fusr%2Flocal%2Fopt%2Fcaddy%2Fbin%3A%2Fusr%2Flocal%2Fopt%2Fllvm%2Fbin%3A%2FUsers%2Fming-derwang%2F.local%2Fbin%3A%2FUsers%2Fming-derwang%2F.cargo%2Fbin%3A%2FUsers%2Fming-derwang%2FLibrary%2FApplication+Support%2Fedgedb%2Fbin%3A%2FUsers%2Fming-derwang%2F.cargo%2Fbin%3A%2FUsers%2Fming-derwang%2F.bun%2Fbin%3A%2FUsers%2Fadmin%2FLibrary%2Fpnpm%3A%2FUsers%2Fming-derwang%2F.nvm%2Fversions%2Fnode%2Fv22.14.0%2Fbin%3A%2FUsers%2Fming-derwang%2Ferlang-27%2Fbin%3A%2FUsers%2Fming-derwang%2Fbin%3A%2Fusr%2Flocal%2Fbin%3A%2Fusr%2Flocal%2Fbin%3A%2Fusr%2Fbin%3A%2Fbin%3A%2Fusr%2Fsbin%3A%2Fsbin%3A%2Fusr%2Flocal%2Fgo%2Fbin%3A%2Fopt%2FX11%2Fbin%3A%2FLibrary%2FApple%2Fusr%2Fbin%3A%2FUsers%2Fming-derwang%2FLibrary%2FApplication+Support%2Forg.dfinity.dfx%2Fbin%3A%2FUsers%2Fming-derwang%2F.cargo%2Fbin%3A%2FApplications%2FiTerm.app%2FContents%2FResources%2Futilities%3A%2FUsers%2Fming-derwang%2F.foundry%2Fbin%3A%2FUsers%2Fming-derwang%2F.maestro%2Fbin%3A%2FUsers%2Fming-derwang%2Fgo%2Fbin%22%2C%22SHELL%22%3A%22%2Fbin%2Fzsh%22%2C%22TERM%22%3A%22xterm-256color%22%2C%22USER%22%3A%22ming%22%7D
```

you will see stdout
```
event: endpoint
data: /message?sessionId=7891e52a-2a8f-482a-a31c-117d4bdf4029
```

you can use this sessionId to do any further mcp command query to this inspected mcp server.
