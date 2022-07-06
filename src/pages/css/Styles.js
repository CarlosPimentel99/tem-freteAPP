import {StyleSheet} from 'react-native';

 const styles = StyleSheet.create({
    containerLogin: {
      flex: 1,
      backgroundColor: '#DF4B48',
    },  
    containerHeaderLogin: {
      marginTop: '14%',
      marginBottom: '8%',
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
    containerFormLogin: {      
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,   
      paddingStart: '5%', 
      paddingEnd: '5%',
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
      marginTop: 30,
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
      marginTop: 30,
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
      marginTop: 30,
      alignSelf: 'center',    
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
  },
  botaoCompartilhar:{
    backgroundColor: '#1D253B',     
    marginLeft: '2.5%', 
  },
  textoBotaoCompartilhar: {
    color: '#FFFFFF',    
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
      borderRadius: 4,                
      justifyContent: 'center',
      alignItems: 'center',    
      marginEnd: '3%',    

    },
  Logout: {
      fontSize: 20,        
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
      paddingEnd: '3%'  
  }
});

export default styles;
