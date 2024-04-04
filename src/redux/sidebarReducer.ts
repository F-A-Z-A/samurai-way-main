export type SidebarInitialStateType = typeof sidebarInitialState;

const sidebarInitialState = {};

const sidebarReducer = (
  state: SidebarInitialStateType = sidebarInitialState,
  action: any
): SidebarInitialStateType => {
  return state;
};

export default sidebarReducer;