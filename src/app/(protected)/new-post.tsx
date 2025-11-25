import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/AuthProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Redirect, router } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const createPost = async (content: string, user_id: string) => {
  const { data } = await supabase
    .from('posts')
    .insert({ content, user_id })
    .select('*')
    .throwOnError();

  return data;
};

export default function NewPostScreen() {
  const [text, setText] = useState('');
  const { user } = useAuth();

  const queryClient = useQueryClient();

  if (!user) {
    return <Redirect href="/login" />;
  }

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => createPost(text, user?.id),
    onSuccess: (data) => {
      setText('');
      queryClient.invalidateQueries({ queryKey: ['posts'] });

      router.back();
    },
    onError: (error) => {
      console.error(error);
      // Alert.alert('Error', error.message);
    },
  });

  return (
    <SafeAreaView className="flex-1 p-4">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
      >
        <Text className="text-white text-lg font-bold">Username</Text>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="What is on your mind?"
          placeholderTextColor="gray"
          className="text-white text-lg"
          multiline
          numberOfLines={4}
        />

        {error && (
          <Text className="text-red-500 text-sm mt-4">{error.message}</Text>
        )}

        <View className="mt-auto">
          <Pressable
            onPress={() => mutate()}
            className={`${isPending ? 'bg-white/50' : 'bg-white'} py-3 px-6 self-end rounded-full`}
            disabled={isPending}
          >
            <Text className="text-black font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
