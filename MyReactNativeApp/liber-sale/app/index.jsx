import nome from "../assets/images/nome.png";
import React from "react";
import { Text, View, Dimensions, StyleSheet, Alert, Button, Image, TextInput, TouchableOpacity } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
       <Image source={nome} style={styles.nome} />
      <Text style={styles.description}>Realize o login abaixo</Text>

      <TextInput 
        style={styles.campo} 
        keyboardType="email-address" 
        maxLength={100} 
        placeholder="Digite seu email" 
        placeholderTextColor="white"/>
      
      <TextInput 
        style={styles.campo} 
        secureTextEntry 
        maxLength={100} 
        placeholder="Digite sua senha" 
        placeholderTextColor="white"/>
        
        <TouchableOpacity onPress={() => alert("Recuperação de senha")}>
        <Text style={styles.text}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert("Login efetuado!")}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert("Cadastro")}>
        <Text style={styles.text}>Não tem cadastro? <Text style={styles.text}>Aperte aqui</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: 30,
  backgroundColor: "#00d7ff", // Cor de fundo azul
},
title: {
  color: "white",
  fontSize: width * 0.08, // Tamanho da fonte maior, ajustado com base na largura da tela
  fontWeight: "bold",
  marginBottom: 10,
},
text: {
  color: "white",
  fontSize: width * 0.05, // Tamanho da fonte maior, ajustado com base na largura da tela
  fontWeight: "bold",
  marginBottom: 10,
},
description: {
  color: "white",
  fontSize: width * 0.05, // Ajuste do tamanho da fonte
  marginBottom: 20,
},
campo: {
  width: width * 0.8, // O campo vai ocupar 80% da largura da tela
  height: height * 0.08, // Altura do campo proporcional à altura da tela
  borderRadius: 8,
  borderColor: "white",
  borderWidth: 1,
  paddingHorizontal: 15, // Maior espaço dentro do campo
  fontSize: width * 0.05, // Aumenta o tamanho da fonte dentro do campo
  marginBottom: 20,
},
button: {
  backgroundColor: "white",
  paddingVertical: 14,
  paddingHorizontal: 30,
  borderRadius: 8,
  width: "80%", // Botão ocupa 80% da largura da tela
  alignItems: "center",
  justifyContent: "center",
  marginTop: 15,
},
buttonText: {
  color: "#00d7ff",
  fontSize: width * 0.05, // Tamanho do texto do botão maior
  fontWeight: "bold",
},
forgotPassword: {
  color: "white",
  fontSize: width * 0.04, // Tamanho ajustado do texto
  marginTop: 10,
},
registerText: {
  color: "white",
  fontSize: width * 0.04, // Ajuste do texto para o link de cadastro
  marginTop: 20,
},
registerLink: {
  color: "#00d7ff",
  fontWeight: "bold",
},
});