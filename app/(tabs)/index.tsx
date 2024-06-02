import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {

  const [imageUrl, setImageUrl] = useState<string>("");

  const getImage = async () => {
    try {
      const response = await fetch('http://k8s-services-birumhom-35ce0a4c6a-1225687380.us-east-2.elb.amazonaws.com/images/Chicago');
      const json = await response.json();
      setImageUrl(json.data);
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    getImage();
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