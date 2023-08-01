import {SafeAreaView, ScrollView, Image, View, TextInput, Text} from "react-native";
import styles from "./signin.style";
import { BackButton, Button } from "../components/buttons/Buttons";
import { COLORS, SIZES } from "../theme";
import { Formik } from "formik";
import * as Yup from "yup";
import { Entypo } from "@expo/vector-icons";

const SignIn = ({navigation}) => {
    return <SafeAreaView>
                <ScrollView>
                    <View style={styles.topBar}>
                        <BackButton onPress={() => navigation.goBack()} color={COLORS.primary}/>
                        <Image source={require("../assets/images/signin.png")}
                            style={styles.signinImg}/>
                    </View>
                    <View style={styles.controlsWrapper}>
                        <Formik 
                            initialValues={{email: '', password: ''}}
                            validationSchema={validationSchema}
                            onSubmit={(values) => console.log(values)}
                        >
                        {({ touched, handleChange, values, handleBlur, handleSubmit, errors, isValid, setFieldTouched }) => 
                            <View> 
                                <View>
                                    <Text style={styles.controlsTxt}>Email</Text>
                                    <View style={styles.inputWrapper(touched.email ? COLORS.primary : COLORS.gray)}>
                                        <Entypo name="email" size={SIZES.large} color={COLORS.secondary} />
                                        <TextInput style={styles.txtInput} 
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

                                <Button onPress={() => {}} text={"SignIn"}/>
                            </View>}
                        </Formik>
                    </View>
                </ScrollView>
            </SafeAreaView>
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email address is required.').required('Required'),
    password: Yup.string().min(8, 'Password should be at least 8 characters long.').required('Required')
  })

export default SignIn;