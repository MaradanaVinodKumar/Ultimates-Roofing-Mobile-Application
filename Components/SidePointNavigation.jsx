import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

function SidePointNavigation() {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.sidePoint}>
                <TouchableOpacity>
                    <MaterialIcons
                        name="request-quote"
                        size={34}
                        color="white"
                        onPress={() => {
                            navigation.navigate("quote");
                        }}
                    />
                </TouchableOpacity>
            </View>

        </>
    );
}

export default SidePointNavigation;
const styles = StyleSheet.create({
    sidePoint: {
        height: 60,
        width: 50,
        backgroundColor: "black",
        top: 380,
        right: 0,
        position: "absolute",
        zIndex: 1,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        // borderTopRightRadius: 50,
        // borderBottomRightRadius: 50,
        padding: 11,
    },
})