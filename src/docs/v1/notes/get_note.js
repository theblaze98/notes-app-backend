const getNote = {
  tags: ['Note'],
  description: 'Get Note',
  operationId: 'get_note',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Note ID',
      required: true,
      type: 'string'
    }
  ],
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'When user get note successfully',
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
              id: {
                type: 'string',
                example: '60564fcb544047cdc3844818'
              },
              createdAt: {
                type: 'string',
                example: '2021-03-20T19:40:59.495Z'
              },
              updatedAt: {
                type: 'string',
                example: '2021-03-20T19:40:59.495Z'
              },
              createdBy: {
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    example: 'Shammael'
                  },
                  email: {
                    type: 'string',
                    example: 'shammamnd2015@gmail.com'
                  },
                  id: {
                    type: 'string',
                    example: '60564fcb544047cdc3844818'
                  }
                }
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
                example: 'Note not found'
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

export { getNote };
