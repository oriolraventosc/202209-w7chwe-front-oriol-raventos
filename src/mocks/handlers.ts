import { rest } from "msw";
import usersListMock from "./listUsersMock";

const apiUrl = process.env.REACT_APP_URL;

const handlers = [
  rest.get(`${apiUrl}users/list`, async (request, response, context) => {
    return response(context.status(200), context.json(usersListMock));
  }),
  rest.post(`${apiUrl}users/register`, async (request, response, context) => {
    return response(context.status(201));
  }),
];

export default handlers;
