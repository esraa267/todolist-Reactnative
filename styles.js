import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    fontSize: 28,
  },
  addTodoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  input: {
    fontSize: 18,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    padding: 0,
  },
  inputFocused: {
    flexGrow: 1,
    marginRight: 5,
  },

  btnContainer: {
    backgroundColor: "black",
    width: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 18,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  itemTitle: {
    fontSize: 18,
  },
  itemCheckBox: {
    marginRight: 10,
  },
  listHeader: {
    textAlign: "center",
    fontSize: 22, 
    fontWeight:'bold'
  },
});
