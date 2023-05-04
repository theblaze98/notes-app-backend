const getNotes = {
  tags: ['Note'],
  description: 'Get all the notes',
  operationId: 'get_notes',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'page',
      in: 'query',
      description: 'page',
      type: 'string',
      default: 1
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
              totalDocs: {
                type: 'number',
                example: 100
              },
              limit: {
                type: 'number',
                example: 10
              },
              page: {
                type: 'number',
                example: 1
              },
              totalPages: {
                type: 'number',
                example: 10
              },
              docs: {
                type: 'array',
                items: {
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
              },
              hasNextPage: {
                type: 'boolean',
                example: true
              },
              nextPage: {
                type: 'number',
                example: 2
              },
              hasPrevPage: {
                type: 'boolean',
                example: true
              },
              prevPage: {
                type: 'number',
                example: null
              },
              pagingCounter: {
                type: 'number',
                example: 1
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
              }
            }
          }
        }
      }
    }
  }
};

export { getNotes };
