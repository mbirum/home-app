import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {

  const [imageUrl, setImageUrl] = useState<string>("");

  const getImage = async () => {
    try {
      const response = await fetch('https://services.mattbirum.com/images/Chicago');
      const json = await response.json();
      setImageUrl(json.data);
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    //getImage();
  }, []);

  return (
    <div style={styles.wrapper}>
      <img style={styles.image} src={imageUrl} />
    </div>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    textAlign: "center"
  },
  image: {
    width: "90%",
    height: "77%"
  }
});
