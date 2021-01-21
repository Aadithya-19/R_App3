import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';


export default class Home extends React.Component {
    nextScreen = () => {
        this.props.navigation.navigate('Compare');
    };
    render() {
        return (
            <View>
                <Text style = {{alignSelf:'center',marginTop:100}}>
            Home
                </Text>
                <TouchableOpacity
                onPress={this.nextScreen}
                style={{
                        width: 300,
                        height: 50,
                        marginTop: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf:'center',
                        borderRadius: 25,
                        backgroundColor: "pink",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text>
                        Compare items
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
