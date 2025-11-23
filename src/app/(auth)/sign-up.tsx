import { supabase } from '@/lib/supabase';
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Please enter an email and password');
    }

    setLoading(true);

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    }

    if (!session) {
      Alert.alert('Please check your inbox for email verification!');
    }

    setLoading(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <View className="flex-1 justify-center px-6">
          {/* Header */}
          <View className="mb-12">
            <Text className="text-white text-4xl font-bold mb-2">
              Create an account
            </Text>
            <Text className="text-gray-400 text-base">Sign in to continue</Text>
          </View>

          {/* Form */}
          <View className="mb-6">
            {/* Email Input */}
            <View className="mb-4">
              <Text className="text-white text-sm font-medium mb-2">Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="#71767a"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                className="bg-gray-900 text-white text-base px-4 py-4 rounded-lg border border-gray-800"
              />
            </View>

            {/* Password Input */}
            <View className="mb-6">
              <Text className="text-white text-sm font-medium mb-2">
                Password
              </Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="#71767a"
                secureTextEntry
                autoCapitalize="none"
                autoComplete="password"
                className="bg-gray-900 text-white text-base px-4 py-4 rounded-lg border border-gray-800"
              />
            </View>

            {/* Error Message */}
            {error && (
              <View className="mb-4">
                <Text className="text-red-500 text-sm">{error}</Text>
              </View>
            )}

            {/* Login Button */}
            <Pressable
              onPress={handleSignUp}
              disabled={loading}
              className={`py-4 rounded-lg ${
                loading ? 'bg-gray-600' : 'bg-white active:bg-gray-200'
              }`}
            >
              <Text
                className={`text-center font-semibold text-base ${
                  loading ? 'text-gray-400' : 'text-black'
                }`}
              >
                {loading ? 'Signing up...' : 'Sign up'}
              </Text>
            </Pressable>
          </View>

          {/* Sign up link */}
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-400 text-base">
              Already have an account?{' '}
            </Text>
            <Link href="/login" asChild>
              <Pressable>
                <Text className="text-white font-semibold text-base">
                  Sign in
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
