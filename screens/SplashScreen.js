import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export default class SplashScreen extends React.Component {

    nextScreen = () => {
        this.props.navigation.navigate('LogIn');
    };


    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: "green"
            }}>
                <Image
                    style={{ alignSelf: 'center', height: 300, width: 300, marginTop: 20 }}
                />
                <TouchableOpacity
                    onPress={this.nextScreen}
                    style={{
                        width: 300,
                        height: 50,
                        marginTop: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
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
                        Already have an account Log in
                    </Text>
                </TouchableOpacity>
            </View >
        );
    }

}
