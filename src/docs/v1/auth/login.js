const login = {
  tags: ['Auth'],
  description: 'Login',
  operationId: 'login',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/loginRequestBody'
        }
      }
    },
    required: true
  },
  responses: {
    200: {
      description: 'When user login successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              user: {
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    example: 'John Snow'
                  },
                  id: {
                    type: 'string',
                    example: '60564fcb544047cdc3844818'
                  },
                  email: {
                    type: 'string',
                    example: 'john.snow@email.com'
                  }
                }
              },
              token: {
                type: 'string',
                example:
                  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ.3Thp81rDFrKXr3WrY1MyMnNK8kKoZBX9lg-JwFznR-M'
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
                example: 'Invalid credentials'
              }
            }
          }
        }
      }
    }
  }
};

const loginRequestBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      example: 'john.snow@email.com'
    },
    password: {
      type: 'string',
      description: "unencrypted user's password",
      example: '!1234aWe1Ro3$#'
    }
  }
};

export { loginRequestBody, login };

// _id: {
//   type: 'string',
//   example: '60564fcb544047cdc3844818'
// },
// fullName: {
//   type: 'string',
//   example: 'John Snow'
// },
// email: {
//   type: 'string',
//   example: 'john.snow@email.com'
// },
// password: {
//   type: 'string',
//   example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed'
// },
// enabled: {
//   type: 'boolean',
//   example: true
// },
// role: {
//   type: 'string',
//   example: '605636683f6e29c81c8b2db0'
// },
// createdAt: {
//   type: 'string',
//   example: '2021-03-20T19:40:59.495Z'
// },
// updatedAt: {
//   type: 'string',
//   example: '2021-03-20T21:23:10.879Z'
// }
