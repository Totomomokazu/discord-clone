import React, { useEffect, useState } from 'react'
import { CollectionReference, DocumentData, collection, query } from 'firebase/firestore';
import { QueryDocumentSnapshot, QuerySnapshot, onSnapshot, Query } from "firebase/firestore";
import { db } from '../firebase';


interface Channels{
    id:string,
    channel:DocumentData;
}



const useCollection = (data:string) => {
    const [documents,setDocuments] = useState<Channels[]>([]);
    const collectionRef: Query<DocumentData> = query(collection(db,data));
    
    useEffect(() =>{
        

        onSnapshot(collectionRef,(querySnapshot)=>{
            const channelsResults: Channels[] = [];
            querySnapshot.docs.forEach((doc) => 
                // console.log(doc.id,doc.data())
                // console.log("テスト")
                channelsResults.push({
                    id:doc.id,
                    channel:doc.data(),
                })
            );
            setDocuments(channelsResults);
        });
    },[]);

  return { documents};
};

export default useCollection
