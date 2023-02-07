import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { firebaseConfig } from "../data.js";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export function deal(context) {

    const docRef = doc(db, "offers", context.params.id);
    getDoc(docRef).then((res) => {
        const { uid } = JSON.parse(localStorage.getItem('userInfo'));
        let newData = { ...res.data() };
        newData.clients.push(uid);
        return setDoc(doc(db, "offers", context.params.id), {
            ...newData
        });
    }).then((res) => {
        this.redirect(`#/details/${context.params.id}`);
    })
        .catch((error) => {
            console.log(error.message);
        });;

};

