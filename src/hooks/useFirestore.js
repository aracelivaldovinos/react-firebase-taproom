import { useState, useEffect } from 'react';
import  { projectFirestore }  from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(()=>{
    const unsub = projectFirestore.collection(collection)
    .orderBy('name', 'asc')
    .onSnapshot((snap) =>{
      let documents = [];
      snap.forEach(doc =>{
        documents.push({...doc.data(), id: doc.id})
      });
      setDocs(documents)
      console.log(documents)
    });
    return () => unsub();
  }, [collection])

  return { docs }
}
 
export default useFirestore;