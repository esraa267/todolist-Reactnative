import { View, FlatList } from "react-native";
import { styles } from "../../styles";
import CheckBox from "expo-checkbox";
import { Heading, Icon, IconButton, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";
const example2 = (props) => {
  return (
    <>
      <Heading mb="2" size="md">
        {props.count} of {props.list.length} tasks done
      </Heading>
      <FlatList
        w="100%"
        justifyContent="space-between"
        align="center"
        data={props.list || []}
        renderItem={({ item: todo, index: index }) => (
          <View style={styles.itemContainer}>
            <CheckBox
              style={styles.itemCheckBox}
              value={todo.done}
              onTouchStart={() => props.onTodoChangeStatus(index)}
            />
            <Text strikeThrough={todo.done} style={styles.itemTitle}>
              {todo.title}
            </Text>
            <IconButton
              size="sm"
              colorScheme="trueGray"
              icon={
                <Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />
              }
              onPress={() => props.onTodoDelete(index)}
            />
          </View>
        )}
        keyExtractor={(item, index) => `${index}`}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderBottomColor: "gray",
              margin: 5,
              borderBottomWidth: 3,
            }}
          ></View>
        )}
      />
    </>
  );
};
export default example2;
