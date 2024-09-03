import React from "react";
import {View,Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from "react-native-web";
import colors from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemRecipe = ({item}) => {
    const navigation = useNavigation();
    console.log('props: ', item);
    return (
        <TouchableOpacity 
        onPress= {() => navigation.navigate('RecipeDetailScreen', {
            recipeId: item.id
        })}
        style={styles.itemContainer}
        >
            <Image 
                source={{ uri: item.image}}
                resizeMode="cover"
                style={styles.imageRecipe}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color={colors.start} />
                    <Text style={styles.rating}> {item.rating} </Text>
                </View>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    itemContainer:{
        padding : 16,
        borderBottomWidth : 1,
        borderColor : colors.border,
        flexDirection : 'row',
    },
    imageRecipe: {
        backgroundColor : colors.border,
        height: 78,
        width:78,
        borderRadius : 8,
    },
    infoContainer:{
        marginLeft:16,
        flex:1,
        // justifyContent: 'space-between',
    },
    name:{
        fontSize : 16,
        fontWeight: 'bold',
        color: colors.text,
        marginLeft: 16,
    },
    ratingContainer:{
        fontSize : 16,
        marginLeft: 8,
        color: colors.text,
        marginTop: 8,
        flaxDirection: "row",
    },
    rating:{
        fontSize : 16,
        marginLeft: 8,
        color: colors.primary,
    }
});


export default ItemRecipe;