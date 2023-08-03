import {SafeAreaView, ScrollView, Image, View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./signin.style";
import { BackButton, Button } from "../components/buttons/Buttons";
import { COLORS, SIZES } from "../theme";
import { Formik } from "formik";
import * as Yup from "yup";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

const SignUp = ({navigation}) => {

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const registerUser = async (formdata) => {
        try {
            setLoading(true);

            const reqOpts = {
                method: "POST", 
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(formdata)
            };
            const res = await fetch("http://localhost:3000/api/register", reqOpts);
            const data = await res.json()

            if(res.status === 201 && data) {
                setLoading(false);
                toast.success(data.message);
                navigation.goBack();
            } 
            if(!data) {
                toast.error("Error creating account. Try again.")
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        } 
    }

    return <SafeAreaView>
                <ScrollView>
                    <View style={styles.topBar}>
                        <BackButton onPress={() => navigation.goBack()} color={COLORS.primary}/>
                        <Image source={require("../assets/images/signin.png")}
                            style={styles.signinImg}/>
                    </View>
                    <View style={styles.controlsWrapper}>
                        <Formik 
                            initialValues={{username: '', email: '', password: ''}}
                            validationSchema={validationSchema}
                            onSubmit={(values) => registerUser(values)}
                        >
                        {({ touched, handleChange, values, handleSubmit, errors, isValid, setFieldTouched }) => 
                            <View> 
                                <View>
                                    <Text style={styles.controlsTxt}>Username</Text>
                                    <View style={styles.inputWrapper(touched.username ? COLORS.primary : COLORS.gray)}>
                                        <Entypo name="user" size={SIZES.large} color={COLORS.secondary} />
                                        <TextInput style={styles.txtInput} 
                                                    inputMode="text"
                                                    placeholder="Enter your username"
                                                    onFocus={() => setFieldTouched("username")}
                                                    onBlur={() => setFieldTouched("username", "")}
                                                    autoCorrect={false}
                                                    value={values.username}
                                                    onChangeText={handleChange("username")}/>
                                    </View>
                                    {touched.username && 
                                        errors.username && 
                                        <Text style={styles.error}>{errors.username}</Text>}
                                </View>

                                <View>
                                    <Text style={styles.controlsTxt}>Email</Text>
                                    <View style={styles.inputWrapper(touched.email ? COLORS.primary : COLORS.gray)}>
                                        <Entypo name="email" size={SIZES.large} color={COLORS.secondary} />
                                        <TextInput style={styles.txtInput} 
                                                    inputMode="email"
                                                    placeholder="Enter your email"
                                                    onFocus={() => setFieldTouched("email")}
                                                    onBlur={() => setFieldTouched("email", "")}
                                                    autoCorrect={false}
                                                    value={values.email}
                                                    onChangeText={handleChange("email")}/>
                                    </View>
                                    {touched.email && 
                                        errors.email && 
                                        <Text style={styles.error}>{errors.email}</Text>}
                                </View>

                                <View>
                                    <Text style={styles.controlsTxt}>Password</Text>
                                    <View style={styles.inputWrapper(touched.password ? COLORS.primary : COLORS.gray)}>
                                        <Entypo name="lock" size={SIZES.large} color={COLORS.secondary} />
                                        <TextInput style={styles.txtInput} 
                                                    secureTextEntry={!showPassword}
                                                    placeholder="Enter your password"
                                                    onFocus={() => setFieldTouched("password")}
                                                    onBlur={() => setFieldTouched("password", "")}
                                                    autoCorrect={false}
                                                    value={values.password}
                                                    onChangeText={handleChange("password")}/>
                                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                            <Entypo name={ showPassword ? "eye" : "eye-with-line"} size={SIZES.large} color={COLORS.primary}/>
                                        </TouchableOpacity>
                                    </View>
                                    {touched.password && 
                                        errors.password && 
                                        <Text style={styles.error}>{errors.password}</Text>}
                                </View>

                                <Button onPress={isValid ? handleSubmit : null} text={loading ? <ActivityIndicator /> : "Register"} isEnabled={isValid} />
                            </View>}
                        </Formik>
                    </View>
                </ScrollView>
            </SafeAreaView>
}

const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Username should be atleast 3 characters long.').required(),
    email: Yup.string().email('Email address is required.').required(),
    password: Yup.string().min(8, 'Password should be at least 8 characters long.').required()
  })

export default SignUp;