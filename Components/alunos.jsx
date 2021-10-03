import React, {Component} from 'react'
import {Text,View} from 'react-native'

class Aluno extends Component{
    render(){
      return (
          <View>
              <Text style={{fontSize:23,fontWeight:'bold'}}>
                  Joananda Ketlen
              </Text>

              <Text style={{fontSize:16,fontWeight:'bold'}}>
                  22 anos
              </Text>

              <Text style={{fontSize:16,fontWeight:'bold'}}>
                  Curso Design digital
              </Text>

              <Text style={{fontSize:16,fontWeight:'bold'}}>
                  Cidade de Sobral
              </Text>

          </View>
      )  
    }
}

export default Aluno
