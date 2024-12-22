import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LottieView from 'lottie-react-native';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({}); // For tracking validation errors

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    let currentErrors = {};

    if (!name.trim()) {
      currentErrors.name = 'Name cannot be empty.';
    }

    if (!isValidEmail(email)) {
      currentErrors.email = 'Please enter a valid email address.';
    }

    if (password.length < 6) {
      currentErrors.password = 'Password must be at least 6 characters long.';
    }

    if (password !== confirmPassword) {
      currentErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      // If no errors, proceed with sign-up logic
      navigation.navigate('card');
    }
  };

  return (
    <View style={styles.container}>
      {/* Animation at the top */}
      <View style={styles.logoContainer}>
        <LottieView
          source={require('../assets/animation/Logo.json')}
          autoPlay
          style={{ width: 150, height: 150 }} // Adjusted size for consistency
        />
      </View>

      {/* Register Here text */}
      <Text style={styles.registerText}>Register Here</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        
        value={name}
        onChangeText={(text) => {
          setName(text);
          setErrors({ ...errors, name: '' });
        }}
        placeholderTextColor="#454545"
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErrors({ ...errors, email: '' });
        }}
        placeholderTextColor="#454545"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setErrors({ ...errors, password: '' });
        }}
        placeholderTextColor="#454545"
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => {
          setConfirmPassword(text);
          setErrors({ ...errors, confirmPassword: '' });
        }}
        placeholderTextColor="#454545"
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}

      {/* Register Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Already Have an Account?{' '}
        <Text
          style={styles.signinText}
          onPress={() => navigation.navigate('Home')}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20, // Space below the animation
  },
  registerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20, // Space between "Register Here" text and input fields
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#3399FF',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 5, // Adjusted margin for error message
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#3399FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: '#444',
  },
  signinText: {
    color: '#3399FF',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: '5%', // Align with input box
    marginBottom: 10, // Add spacing between error and next input
  },
});

export default SignUpScreen;
