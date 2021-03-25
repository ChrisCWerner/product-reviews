import { buildQuery } from "../../utils/buildQuery";
import { numberWithinRange } from "../../utils/helpers/numberWithinRange";
import { parseHeaderLink } from "../../utils/parseHeaderLink";

const state = () => ({
  loading: false,
  products: [],
  queryFilters: {
    _page: 1,
    _limit: 5,
    q: "",
  },
  pagination: {
    next: 0,
    prev: 0,
    first: 1,
    last: 1,
    total: 0,
  },
  queryHistory: {}, // should store cache and timestamp
});

const getters = {
  products: (state) => state.products,
  pagination: (state) => ({ ...state.queryFilters, ...state.pagination }),
  query: (state) => state.queryFilters,
  loading: (state) => state.loading,
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PAGE(state, page) {
    state.queryFilters._page = page;
  },
  SET_PAGINATION(state, pagination = {}) {
    state.pagination = {
      ...state.pagination,
      ...pagination,
    };
  },
  ADD_HISTORY(state, { key, data }) {
    state.queryHistory[key] = { data, timestamp: Date.now() };
  },
  REMOVE_HISTORY(state, key) {
    delete state.queryHistory[key];
  },
  SET_LOADING(state, isLoading) {
    state.loading = isLoading;
  },
};

const actions = {
  async fetchProducts({ getters, commit, dispatch }, { page = 0 } = {}) {
    // checks if a request is already running and prevent new requests until finished
    if (getters.loading) return;

    // sets loading for products
    commit("SET_LOADING", true);

    // validates page to fetch data
    if (
      page &&
      numberWithinRange(page, getters.pagination.first, getters.pagination.last)
    ) {
      commit("SET_PAGE", page);
    }

    // builds the query string from the query paramaters
    const query = buildQuery(getters.query);

    // calls api function to fetch reviews within query
    const res = await dispatch(
      "api",
      {
        service: "reviews/all",
        query,
      },
      { root: true }
    );

    // sets pagination and products data from the server response
    commit("SET_PAGINATION", parseHeaderLink(res.headers.link));
    commit("SET_PRODUCTS", res.data);

    commit("SET_LOADING", false);
    // if extra action is needed, returns response
    return res;
  },
};

export default { namespaced: true, state, getters, mutations, actions };
