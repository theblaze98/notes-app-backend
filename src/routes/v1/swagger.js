// import path from 'path';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import apiDocumentation from '../../docs/v1/apiDocs.js';

const swaggerSpecs = swaggerJsDoc(apiDocumentation);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/doc', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
  console.log(`Docs available at http://localhost:${port}/api/v1/doc`);
};

export default swaggerDocs;
