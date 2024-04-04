import {addMessageAC, DialogsInitialStateType, updateNewMassageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
  dialogsPage: DialogsInitialStateType
};
type MapDispatchToPropsType = {
  addMessage: () => void
  updateNewMassageText: (text: string) => void
  // если нет return в функции, то она ничего не возвращает, поэтому здесь void
};

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  // Dispatch импортировать только из Redux (будет на ваыбор еще React)
  return {
    addMessage: () => {
      dispatch(addMessageAC());
    },
    updateNewMassageText: (text: string) => {
      dispatch(updateNewMassageTextAC(text));
    }
  }
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
// ()() - вызываем функцию connect, которая возвращает функцию, которая сразу вызывается