import client from "../api/client";

const actions = {
  async client(ctx, route = {}) {
    try {
      const res = await client(route);
      console.log(res);
      return res;
    } catch (e) {
      // TODO handle error
      console.error(e.toJSON());
    }
  },
};

export default {
  actions,
};
