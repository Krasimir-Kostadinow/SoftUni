import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

import { firebaseConfig } from "../data.js";
import { checkForLogged } from "../helper.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function create(context) {
    checkForLogged(context);
    this.loadPartials({
        'header': './templates/partials/header.hbs',
        'footer': './templates/partials/footer.hbs'
    }).then(function () {
        this.partial('./templates/create.hbs');
    })
};

function postCreate(context) {
    const { nameProduct, price, imageUrl, description, brand } = context.params;
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    addDoc(collection(db, "offers"), {
        nameProduct,
        price,
        imageUrl,
        description,
        brand,
        salesman: userInfo.uid,
        clients: []
    })
        .then((docRef) => {
            this.redirect('#/home');
            // console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });


}

export { create, postCreate } 