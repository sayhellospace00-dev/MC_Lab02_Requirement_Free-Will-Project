import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { DEMO_ACCOUNT } from "../features/auth/data/demoAccount";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  function handleLogin() {
    const isValid = username === DEMO_ACCOUNT.username && password === DEMO_ACCOUNT.password;

    setMessage(
      isValid ? "Login successful!" : "Invalid username or password."
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, gap: 16,}}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Store Management</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{borderWidth: 1, padding: 12, borderRadius: 10,}}
      />
      
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{borderWidth: 1, padding: 12, borderRadius: 10,}}
      />

      <Pressable 
        onPress={handleLogin}
        style={{backgroundColor: "#2563EB", padding: 14, borderRadius: 10,}}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </Pressable>
      
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}