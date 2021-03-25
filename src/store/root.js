import client from "../api/client";

const actions = {
  async api(ctx, route = {}) {
    try {
      return await client(route);
    } catch (e) {
      // TODO handle error
      console.error(e.toJSON());
    }
  },
};

export default {
  actions,
};
