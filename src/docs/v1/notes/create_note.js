const createNote = {
  tags: ['Note'],
  description: 'Create Note',
  operationId: 'create_note',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createNoteRequestBody'
        }
      }
    },
    required: true
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    201: {
      description: 'When user create note successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
                example: 'Planning meeting with ......'
              },
              title: {
                type: 'string',
                example: 'Dinner with Carlson'
              },
              createdAt: {
                type: 'string',
                example: '2021-03-20T19:40:59.495Z'
              }
            }
          }
        }
      }
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'An error have occured'
              }
            }
          }
        }
      }
    },
    400: {
      description: 'Bad Request Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'The token are required'
              },
              error_type: {
                type: 'string',
                example: 'Validation',
                required: false
              }
            }
          }
        }
      }
    }
  }
};

const createNoteRequestBody = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      example: 'Planning dinner'
    },
    description: {
      type: 'string',
      example: 'We have to make everything.....'
    }
  }
};

export { createNoteRequestBody, createNote };
