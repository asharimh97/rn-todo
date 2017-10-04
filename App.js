import React from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import ListItem from './src/components/ListItem'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todo: [],
      textInput: ''
    }
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this)
  }

  handleSubmitTodo(){
    // let newTodo = Object.create({}, { key: this.state.textInput })
    this.setState({
      todo : [
        { key: this.state.textInput },
        ...this.state.todo
      ]
    })
    this.refs.todoInput.clear()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.big}>Simple To Do App!</Text>
        <TextInput
          ref="todoInput"
          placeholder="Input your todo..."
          style={{ width: '100%', height: 50, marginBottom: 15 }} 
          onChangeText={ text => this.setState({ textInput: text }) }/>
        <Button 
          title='Add todo'
          onPress={ (this.handleSubmitTodo) }/>
        <Text style={{ marginBottom: 10 }} >{ this.state.todo.length === 0 ? '' : ('Press to mark it as completed: (' + this.state.todo.length + ')')}</Text>
        <FlatList 
          style={{ marginBottom: 10 }}
          data={ this.state.todo }
          onPressItem={ () => Alert.alert('Hubla') }
          renderItem={ ({item}) => <ListItem text={item.key} /> }/>
        <Button 
          onPress={() => this.setState({ todo: [] })}
          title='Clear list'
          color='#e74c3c' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    justifyContent: 'center'
  },
  big: {
    fontSize: 20,
    color: '#666'
  }
});
