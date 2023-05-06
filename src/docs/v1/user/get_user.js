const getUser = {
  tags: ['User'],
  description: 'Get an user',
  operationId: 'get_user',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'user ID',
      type: 'string',
      required: true
    }
  ],
  responses: {
    200: {
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
              }
            }
          }
        }
      }
    }
  }
};

export { getUser };
