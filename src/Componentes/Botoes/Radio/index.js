import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Radio({options=[], horizontal = false, onChangeSelect, selected, title}){
    return (
        <View style={styles.radioContainer}>
            <Text style={styles.titulo}>{title}</Text>
            <View style={horizontal?styles.horizontal:styles.vertical}>
                {
                    options.map((opt, index)=>(
                        <TouchableOpacity 
                            onPress={()=> onChangeSelect(opt, index)} 
                            style={[styles.optContainer, {marginLeft: horizontal?10:0, marginTop: horizontal?0:10}]}
                        >
                            <View style={styles.outlineCircle}>
                                {selected == index && <View style={styles.innerCircle}/>}
                            </View>
                            <Text style={[styles.texto, {color: selected==index?'#444': '#777'}]}>{opt}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}