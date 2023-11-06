export const validationError = errorMessage => {
	const codeMatcher = {
		DUPLICATE_KEY_USERNAME: {
			message: 'USERNAME_ALREADY_EXISTS',
			statusCode: 409,
		},
		DUPLICATE_KEY_EMAIL: {
			message: 'EMAIL_ALREADY_EXISTS',
			statusCode: 409,
		},
	};

	return (
		codeMatcher[errorMessage] ?? {
			message: 'something went wrong',
			statusCode: 500,
		}
	);
};
