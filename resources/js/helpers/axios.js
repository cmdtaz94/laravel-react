const { default: axios } = require("axios");

async function performRequest(
  method,
  requestUrl,
  success,
  fail,
  always = () => {},
  data = {},
  headers = {}
) {
  try {
    const response = await axios.request({
      url: `/${requestUrl}`,
      method: method.toLowerCase(),
      headers,
      data,
    });

    success(response);
  } catch (error) {
    fail(error);
  }

  always();
}

const HTTP_UNPROCESSABLE_ENTITY = 422;

export { performRequest, HTTP_UNPROCESSABLE_ENTITY };
