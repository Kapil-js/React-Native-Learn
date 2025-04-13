import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  return (
    <View>
      <Text>Loader</Text>

      <TouchableOpacity>
        <Text>{loading ? 'Hide Loader' : 'Show Loader'}</Text>
      </TouchableOpacity>
      {loading && (
        <>
          <ActivityIndicator
            style={{marginTop: 100}}
            size={100}
            color={'red'}
          />
          <Text style={{fontSize: 30, color: 'red'}}>Loading...</Text>
        </>
      )}
    </View>
  );
};

export default Loader;
