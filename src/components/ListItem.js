import React, { Component } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class ListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            completed : false
        }
        this.togglePress = this.togglePress.bind(this)
    }

    togglePress(){
        this.setState({
            completed : !this.state.completed
        })

        let alert = this.state.completed === false ? 
            Alert.alert('Hubla', 'You have finished ' + this.props.text) :
            Alert.alert('Woops', 'You havent done '+ this.props.text)
        
        return alert
    }
    
    render(){
        return(
            <TouchableOpacity 
                onPress={ this.togglePress }>
                <View style={styles.container}>
                    <Image 
                        style={{ width: 25, height: 25, marginRight: 15 }} 
                        source={this.state.completed ? require('../../assets/img/checked.png') : require('../../assets/img/error.png')} />
                    <Text
                        style={{ marginTop: 2 }}>{ this.props.text }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 2,
        marginBottom: 2
    }
})