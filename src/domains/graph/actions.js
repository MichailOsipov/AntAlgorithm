export const SET_NODES = 'SET_NODES';
export const SET_EDGES = 'SET_EDGES';

export const setNodes = nodes => ({type: SET_NODES, payload: nodes});
export const setEdges = edges => ({type: SET_EDGES, payload: edges});
