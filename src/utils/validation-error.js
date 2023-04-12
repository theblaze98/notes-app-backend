export const validationError = (errorMesasge) => {
  console.log(errorMesasge);
  const codeMatcher = {
    DUPLICATE_KEY: {
      message: "USERNAME_OR_EMAIL_ALREADY_EXISTS",
      statusCode: 409,
    },
  };

  return (
    codeMatcher[errorMesasge] ?? {
      message: "something went wrong",
      statusCode: 500,
    }
  );
};
