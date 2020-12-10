export const addBug = (description, id) => ({
  type: "ADD_BUG",
  payload: {
    description,
    id,
  },
});
export const resolveBug = (id) => ({
  type: "RESOLVE_BUG",
  payload: {
    id,
  },
});
export const unresolveBug = (id) => ({
  type: "UNRESOLVE_BUG",
  payload: {
    id,
  },
});
export const deleteBug = (id) => ({
  type: "DELETE_BUG",
  payload: {
    id,
  },
});
