import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [isLoading, setLoading] = useState(true);
  const [ques, setQues] = useState(0);

  const [options, setOptions] = useState();
  const [score, setScore] = useState(0);

  // const getQuiz = async () => {
  //   const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setQuestions(data.results);
  //   console.log(questions);
  // };
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986')
      .then(response => response.json())
      .then(json => setQuestions(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
    console.log(questions, 'questions');
    setOptions(generateOptionsAndShuffle(questions?.results[0]));
    // setOptions(questions?.results[0]);
    // console.log(options, 'options');
  }, []);

  // useEffect(() => {
  //   getQuiz();
  // }, []);

  const handleNextPress = () => {
    setQues(ques + 1);

    setOptions(generateOptionsAndShuffle(questions?.results[ques + 1]));
  };

  // const handleSelectedOption = _option => {
  //   if (_option === questions?.results[ques]?.correct_answer) {
  //     setScore(score + 10);
  //   }

  //   if (ques !== 9) {
  //     setQues(ques + 1);

  //     setOptions(generateOptionsAndShuffle(questions?.results[ques + 1]));
  //   }
  // };
  const onPress = () => {
    navigation.navigate('Result');
  };

  const generateOptionsAndShuffle = _question => {
    const options = [..._question?.incorrect_answers];
    options.push(_question?.correct_answer);
    // console.log(options, 'Before');
    shuffleArray(options);
    // console.log(options, 'After');

    return options;
  };

  // const handleShowResult = () => {
  //   navigation?.navigate('Result', {score: score});
  // };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingContainer}>Loading..</Text>
      ) : (
        <View style={styles.parentContainer}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q.{decodeURIComponent(questions?.results[ques]?.question)}
            </Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity
              style={styles.optionButton}
              // onPress={() => {
              //   handleSelectedOption(options[0]);
              // }}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => {
              //   handleSelectedOption(options[1]);
              // }}
              style={styles.optionButton}>
              <Text style={styles.option}>
                {' '}
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => {
              //   handleSelectedOption(options[2]);
              // }}
              style={styles.optionButton}>
              <Text style={styles.option}>
                {' '}
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => {
              //   handleSelectedOption(options[3]);
              // }}
              style={styles.optionButton}>
              <Text style={styles.option}>
                {' '}
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PREVIOUS</Text>
            </TouchableOpacity> */}

            {ques !== 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
            )}

            {ques === 9 && (
              <TouchableOpacity
                style={styles.button}
                // onPress={handleShowResult}
              >
                <Text style={styles.buttonText}>SHOW RESULT</Text>
              </TouchableOpacity>
            )}
            {/* 
        <TouchableOpacity onPress={onPress}>
          <Text>END</Text>
        </TouchableOpacity> */}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
    // marginBottom: 16,
  },

  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#C147E9',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },

  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },
  optionButton: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#2D033B',
    borderRadius: 12,
  },

  parentContainer: {
    height: '100%',
  },

  loadingContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
