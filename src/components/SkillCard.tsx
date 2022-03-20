import React from 'react';
import {
  TouchableOpacity,
  TouchableHighlightProps,
  Text,
  StyleSheet,
} from 'react-native';

interface SkillCardProps extends TouchableHighlightProps {
  skill: string;
}

export function SkillCard({skill, ...props}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...props}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
