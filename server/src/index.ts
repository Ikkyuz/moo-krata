import app from './app';
import { config } from './config/config';

const port = config.port;

const server = app.listen(port, () => {
  console.log(`✅ Server started at http://localhost:${port}`);
});

server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${port} is already in use.`);
  } else {
    console.error('❌ Server failed to start:', error);
  }
  process.exit(1); // exit with error
});
