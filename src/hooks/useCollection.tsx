import React, { useEffect, useState } from 'react'
import { CollectionReference, DocumentData, collection, query } from 'firebase/firestore';
import { QueryDocumentSnapshot, QuerySnapshot, onSnapshot, Query } from "firebase/firestore";
import { db } from '../firebase';


interface Channels{ //typescriptを用いているので型を宣言する必要がある。ここで宣言している。
    id:string,
    channel:DocumentData;
}



const useCollection = (data:string) => {
    const [documents,setDocuments] = useState<Channels[]>([]); //usestateで管理するためにuseStateを宣言している
    const collectionRef: Query<DocumentData> = query(collection(db,data));
    
    useEffect(() =>{
        onSnapshot(collectionRef,(querySnapshot)=>{
            const channelsResults: Channels[] = [];
            querySnapshot.docs.forEach((doc) =>  //forEachで展開している
                channelsResults.push({
                    id:doc.id, //interfaceで宣言されているidとchannelがここにつながる。
                    channel:doc.data(),
                })
            );
            setDocuments(channelsResults);
        });
    },[]);

  return { documents};
};

export default useCollection
