import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todo: [{key: 'lorem'}, {key: 'ipsum'}],
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
        {/* <Text>{ this.state.todo.toString() }</Text> */}
        <FlatList 
          data={ this.state.todo }
          renderItem={ ({item}) => <Text>{ item.key }</Text> }/>
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
