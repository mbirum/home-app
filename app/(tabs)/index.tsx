import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';


export default function HomeScreen() {

  const [imageUrl, setImageUrl] = useState<String>("init");

  const getImage = async () => {
    try {
      const response = await fetch('http://k8s-services-birumhom-35ce0a4c6a-1225687380.us-east-2.elb.amazonaws.com/images/chicago-pixelated');
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
    <div>
      { imageUrl }
    </div>
  );
}
