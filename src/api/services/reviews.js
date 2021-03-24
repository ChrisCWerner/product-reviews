export default {
  all: {
    method: "get",
    path: ({ query = "" }) => "/review" + query,
  },
  review: {
    method: "get",
    path: ({ params = {}, query = "" }) => `/review/${params.id}${query}`,
  },
};
