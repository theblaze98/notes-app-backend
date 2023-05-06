const deleteNote = {
  tags: ['Note'],
  description: 'Delete Note',
  operationId: 'delete_note',
  // requestBody: {
  //   content: {
  //     'application/json': {
  //       schema: {
  //         $ref: '#/components/schemas/createNoteRequestBody'
  //       }
  //     }
  //   },
  //   required: true
  // },
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
      description: 'When user delete note successfully',
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

export { deleteNote };
