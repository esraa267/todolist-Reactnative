import { Input, IconButton, VStack, HStack, Heading, Icon } from "native-base";
import { NativeModules } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const Example = ({ onTodoAdd,count,length }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const textChangeHandler = (text) => {
    setTodoTitle(text);
  };
  const addBtnPressHandler = () => {
    let todo = {
      title: todoTitle,
      done: false,
    };

    onTodoAdd(todo);
  };

  return (
    <>
      <Heading mb="2" size="md">
        TODOAPP
      </Heading>
     
      <VStack space={4}>
        <HStack space={2}>
          <Input
            flex={1}
            onChangeText={textChangeHandler}
            value={todoTitle}
            placeholder="Add Task"
          />
          <IconButton
            borderRadius="sm"
            variant="solid"
            icon={
              <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
            }
            onPress={() => {
              if (todoTitle) {
                addBtnPressHandler();
              }
              setTodoTitle("");
            }}
          />
        </HStack>
      </VStack>
    </>
  );
};
export default Example;
