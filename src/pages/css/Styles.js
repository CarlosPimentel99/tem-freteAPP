import {StyleSheet} from 'react-native';

 const styles = StyleSheet.create({
    containerLogin: {
      flex: 1,
      backgroundColor: '#DF4B48',
    },  
    containerHeaderLogin: {
      marginTop: '5%',
      marginBottom: '5%',
      paddingStart: '5%',    
    },
    
    messageLogin: {
      fontSize: 28,
      fontWeight: 'bold',    
      color: '#FFFFFF',    
    },
    messageErro: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FF0000',
    },
    containerLogoLogin: {    
      flex: 2,    
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoLogin: {      
      marginTop: '80%',
      width: '80%',
      resizeMode: 'contain',
    },   
    containerFormLogin: {      
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,   
      paddingStart: '5%', 
      paddingEnd: '5%',
    },  
    containerCamposLogin:{
      marginTop: '75%',
    },
    title: {    
      fontSize: 20,
      marginTop: 28,    
    },
    input: {      
      marginTop: 25,      
      borderRadius: 5,
      height: 41,
      marginBottom: 12,
      fontSize: 16,
      backgroundColor: '#FFFFFF',             
      paddingLeft: 20,
    },
    inputLogin: {
      marginTop: 20,
      borderRadius: 5,
      height: 50,
      fontSize: 16,
      backgroundColor: '#FFFFFF',         
      paddingLeft: 20,
    },
    buttonLoginCadastrar: {
      backgroundColor: '#DF4B48',
      width: '80%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: '5%',
    },
    buttonTextLoginCadastrar: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonRegisterLogin: {
      marginTop: '5%',
      alignSelf: 'center',
      marginBottom: '50%',
    },
    registerTextLogin: {
      color: '#a1a1a1',
    },
    containerRegisterMotorista: {
      flex: 1,
      backgroundColor: '#DF4B48',
    },  
    containerHeaderRegisterMotorista: {
      marginTop: '4%',
      marginBottom: '4%',
      paddingStart: '5%',      
    },
    messageRegisterMotorista: {
      fontSize: 28,
      fontWeight: 'bold',    
      color: '#FFFFFF',    
    },
    containerFormRegisterMotorista: {      
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,   
      paddingStart: '5%', 
      paddingEnd: '5%',
    },  
  container: {
    flex: 1,
    backgroundColor: '#DF4B48',
  },  
  containerFundo: {
    position: 'absolute',      
    width: '111%',
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,  
  },
  containerBotao: {
    flexDirection: 'row',      
    alignItems: 'center',      
    justifyContent: 'center',      

  },
  botaoVisualizar: {
    backgroundColor: '#DF4B48',   
    marginRight: '2.5%', 
  },
  textoBotaoVisualizar: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold'
  },
  botaoCompartilhar:{
    backgroundColor: '#1D253B',     
    marginLeft: '2.5%', 
  },
  textoBotaoCompartilhar: {
    color: '#FFFFFF',    
    fontSize: 10,
    fontWeight: 'bold'
  },
  containerHeader: {
    marginTop: '4%',
    marginBottom: '4%',
    paddingStart: '5%',    
  },
  message: {
      marginStart: '3%',
      position: 'absolute',
      alignSelf: 'flex-start',
      fontSize: 25,
      fontWeight: 'bold',    
      color: '#FFFFFF',    
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#ffffff',
    width: '20%',
    height: 30,    
    borderRadius: 4,                
    justifyContent: 'center',
    alignItems: 'center',    
    marginEnd: '3%',    
    },    
  Logout: {
    fontSize: 15,        
    color: '#DF4B48',                        
  },    
  containerForm: {      
    flex: 2,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,   
    paddingStart: '5%', 
    paddingEnd: '5%',
  },  
  search: {
    marginTop: '4%',
  },
  card: {
      marginTop: '4%',
      paddingTop: '3%',        
      paddingEnd: '3%',
      height: 220,
  },
  cardExibicaoFrete: {
    marginTop: '10%',        
    paddingTop:'5%',
    paddingEnd: '3%',
    height: 330,
  },
  titulosCard: {
      marginStart: '5%',
      fontSize: 15,
      color: '#6C757D',
  },
  textoCard: {
      marginStart: '5%',
      fontSize: 15,
      color: '#1D253B',        
      fontWeight: 'bold',
      paddingBottom: '1.5%',
  },
  iconeReload: {
    position: 'absolute',
    alignSelf: 'flex-end',                      
    paddingEnd: '26%',    
    paddingTop: '1%',
  }

});

export default styles;
