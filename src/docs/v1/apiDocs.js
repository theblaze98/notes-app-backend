import {
  signup,
  signupRequestBody,
  login,
  loginRequestBody
} from './auth/index.js';
import {
  createNote,
  createNoteRequestBody,
  deleteNote,
  getNote,
  getNotes
} from './notes/index.js';

import { getUser } from './user/index.js';
// import path from 'path';
// import * as url from 'url';

// // const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Note app API',
      version: '1.0.0',
      description:
        'This API rest allow you to get, create, edit and delete note',
      contact: {
        name: 'Shammael Bien-Aisé',
        email: 'shammamnd2015@gmail.com'
      }
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'Local server'
      }
    ],
    paths: {
      '/api/v1/auth/signup': {
        post: signup
      },
      '/api/v1/auth/login': {
        post: login
      },
      '/api/v1/note/new': {
        post: createNote
      },
      '/api/v1/note/:id': {
        delete: deleteNote,
        get: getNote
      },
      '/api/v1/note': {
        get: getNotes
      },
      '/api/v1/user/:id': {
        get: getUser
      }
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        signupRequestBody,
        loginRequestBody,
        createNoteRequestBody
      }
    }
  },
  apis: []
};

export default options;
