import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { SearchBar, Header } from 'react-native-elements';

import {BookSearch} from 'react-native-google-books';
import db from '../config'

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state={
      bookName:"",
      reasonToRequest:"",
      IsBookRequestActive : "",
      requestedBookName: "",
      bookStatus:"",
      requestId:"",
      userDocId: '',
      docId :'',
      Imagelink: '',
      dataSource:"",
      showFlatlist: false
  }
}
  async getBooksFromApi (bookName){
    this.setState({bookName:bookName})
      if (bookName.length >2){
      var books = await BookSearch.searchbook(bookName,'AIzaSyCppcPwomtrAifvfRSnZA_FrnNOUgzyAMg')
      this.setState({
        dataSource:books.data,
        showFlatlist:true
      })
      console.log(this.state.showFlatlist)
   }
}
renderItem = ({
    item,i
  }) =>{
    let object = {
      title: item.volumeInfo.title,
      selfLink : item.selfLink, 
      buyLink : item.saleInfo.buyLink, 
      imageLink :item.volumeInfo.imageLinks
    }
    
    
    return(
      <TouchableHighlight 
      style={{ alignItems: "center", 
      backgroundColor: "#DDDDDD", 
      padding: 10, 
      width: '90%', 
    }} 
      activeOpacity={0.6} 
      underlayColor="#DDDDDD" 
      onPress={()=>{ 
        this.setState({ 
          showFlatlist:false, 
          bookName:item.volumeInfo.title, 
        })} 
      } 
        bottomDivider> 
        
        <Text> 
          {item.volumeInfo.title} 
        </Text> 
        </TouchableHighlight>
    )
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text style = {{alignSelf:'center', marginTop:100}}>
            Compare
        </Text>
        <View styles={{ height: 20, width: '100%' }}>
          <SearchBar
            placeholder="Type Here..."
            style ={styles.formTextInput}
            onChangeText={text => this.getBooksFromApi(text)}
            onClear={text => this.getBooksFromApi('')}
            value={this.state.bookName}
           
          />
        </View>
        {  this.state.showFlatlist ?
    
    (  <FlatList
    data={this.state.dataSource}
    renderItem={this.renderItem}
    enableEmptySections={true}
    style={{ marginTop: 10 }}
    keyExtractor={(item, index) => index.toString()}
  /> )
  :(
    <View style={{alignItems:'center'}}>
    
    </View>
  )
}



      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
  item: {
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {
    height: 80,
    width: '100%',
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignSelf: 'center',
  }
});