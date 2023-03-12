const http = require ('http');
const app = require('./app')

const PORT = process.env.PORT || 5000;



const httpServer = http.createServer(app);

httpServer.listen(PORT, ()=> {
  console.log(`Server is listening http://localhost:${PORT}`);
});

// token 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