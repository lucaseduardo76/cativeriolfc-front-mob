import {  Text, TextInput, View, Button } from "react-native"

import { style } from './loginCss';

export const Login = () => {
    return (
        <View style={style.container}>
            <View style={style.logo}>
                <Text>Logo</Text>
            </View>

            <View style={style.titleContainer}>
                <Text style={style.title}>Cativeriol FC</Text>
                <Text style={style.title}>Entre com sua conta</Text>
            </View>

            <View style={style.inputContainer}>
                <View>
                    <Text style={style.label}>Nome de usuário:</Text>
                    <TextInput
                        placeholder='Digite seu nome'
                        placeholderTextColor="#999"
                        onFocus={() => "setIsFocused(true)"}
                        onBlur={() => "setIsFocused(false)"}
                        style={style.inputLogin}
                    />
                </View>

                <View>
                    <Text style={style.label}>Senha:</Text>
                    <TextInput
                        placeholder='Digite sua senha'
                        placeholderTextColor="#999"
                        onFocus={() => "setIsFocused(true)"}
                        onBlur={() => "setIsFocused(false)"}
                        style={style.inputLogin}
                    />
                </View>
            </View>

            <Button
                    title='Entrar'
                />
        </View>
    )
}