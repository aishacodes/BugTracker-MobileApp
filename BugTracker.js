import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { addBug, resolveBug, deleteBug, unresolveBug } from "./store/action";

import AddIcon from "./icons/AddIcon";
import BinIcon from "./icons/BinIcon";
import BugIcon from "./icons/BugIcon";
import CheckIcon from "./icons/CheckIcon";

export default function BugTracker() {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state);
  const unresolvedBug = bugs.filter((bug) => !bug.resolved);
  const resolvedBug = bugs.filter((bug) => bug.resolved);
  const generateId = () => Math.random().toString(36).substring(2, 6);
  const [newBug, setNewBug] = useState("");

  const handleAddBug = () => {
    if (!newBug.trim) return null;
    const id = generateId();
    dispatch(addBug(newBug, id));
    setNewBug("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bug Tracker</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="found a new bug?"
          placeholderTextColor="black"
          style={styles.inputStyle}
          onChangeText={setNewBug}
          value={newBug}
        />
        <TouchableHighlight>
          <AddIcon onPress={handleAddBug} />
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.main}>
        <View style={{ marginBottom: 50 }}>
          <Text style={styles.mainHeader}>Unresolved</Text>
          {unresolvedBug.length ? (
            unresolvedBug.map((bug) => (
              <View style={styles.bugs} key={bug.id}>
                <BugIcon onPress={() => dispatch(resolveBug(bug.id))} />
                <Text style={styles.bugdes}>{bug.description}</Text>
                <BinIcon onPress={() => dispatch(deleteBug(bug.id))} />
              </View>
            ))
          ) : (
            <Text>Empty List</Text>
          )}
        </View>
        <Text style={styles.mainHeader}>Resolved</Text>
        {resolvedBug.length ? (
          resolvedBug.map((bug) => (
            <View style={styles.bugs} key={bug.id}>
              <CheckIcon onPress={() => dispatch(unresolveBug(bug.id))} />
              <Text style={styles.bugdess}>{bug.description}</Text>
              <BinIcon onPress={() => dispatch(deleteBug(bug.id))} />
            </View>
          ))
        ) : (
          <Text>Empty List</Text>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.stat}>TotalBugs {bugs.length}</Text>
        <Text style={styles.stat}>UnresolvedBugs {unresolvedBug.length}</Text>
        <Text style={styles.stat}>ResolvedBugs {resolvedBug.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
  },
  header: {
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: "5%",
  },
  headerText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20,
  },
  form: {
    width: "90%",
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "5%",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    paddingLeft: 10,
  },
  main: {
    display: "flex",
    paddingLeft: "5%",
  },
  mainHeader: {
    paddingBottom: 10,
    fontSize: 15,
    color: "#615E5E",
    textDecorationLine: "underline",
  },
  bugs: {
    paddingRight: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bugdess: {
    paddingHorizontal: 10,
    flex: 1,
    color: "#007762",
  },
  bugdes: {
    paddingHorizontal: 10,
    flex: 1,
    color: "#BD0606",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5%",
    paddingVertical: 15,
    backgroundColor: "#F2F2F2",
  },
  stat: {
    marginRight: 10,
    paddingRight: 5,
    borderRightWidth: 1,
    borderColor: "grey",
  },
});
