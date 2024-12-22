import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useEffect, useState } from 'react';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    let currentErrors = {};

    if (!username.trim()) {
      currentErrors.username = 'Username is required.';
    }
    if (!password.trim()) {
      currentErrors.password = 'Password is required.';
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      navigation.navigate('card', { username }); // Pass username to the CardScreen
    }
  };

  if (isLoading) {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/animation/Animation.json')}
          autoPlay
          loop
          style={{ width: 300, height: 300 }}
        />
        {/* Adjusted the gap between Lottie animation and the "Get Started" button */}
        <View style={{ marginTop: 40 }} /> 
        <Pressable style={styles.getStartedButton} onPress={() => navigation.navigate('login')}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LottieView
          source={require('../assets/animation/Logo.json')}
          autoPlay
          style={{ width: 150, height: 150 }}
        />
      </View>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#454545"
        value={username}
        onChangeText={(text) => {
          setUsername(text);
          setErrors({ ...errors, username: '' });
        }}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#454545"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setErrors({ ...errors, password: '' });
        }}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('signup')}>
        <Text>
          <Text style={[styles.signupText, { color: 'black' }]}>Don't have an account?{' '}</Text>
          <Text style={[styles.signupText, { color: 'blue' }]}>Register</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  getStartedButton: {
    marginTop: 20,
    backgroundColor: '#3399FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
    fontWeight: '900',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3399FF',
    marginBottom: 5,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    fontSize: 16,
    height: 50,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#3399FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 10,
  },
});

export default Login;
