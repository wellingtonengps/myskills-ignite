import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreting] = useState('');

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    console.log('New Skill', data);

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreting('Good Morning 🌅');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreting('Good Afternoon ');
    } else {
      setGreting('Good Night 🌃');
    }
  }, [mySkills]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} testID="welcome">
        Welcome, Wellington
      </Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        testID="input-new"
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button testID="button-add" title="Add" onPress={handleAddSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      {mySkills && (
        <FlatList
          testID="flatlist-skills"
          data={mySkills}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="never"
          renderItem={({item}) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    fontSize: 18,
    color: '#FFF',
  },
});
