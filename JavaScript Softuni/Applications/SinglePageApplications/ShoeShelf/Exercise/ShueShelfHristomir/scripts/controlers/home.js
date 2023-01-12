import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

import { firebaseConfig } from "../data.js";
import { checkForLogged } from "../helper.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




export function home(context) {
    checkForLogged(context);
    // context.offers = [];

    getDocs(collection(db, "offers"))
        .then((querySnapshot) => {
            // console.log(querySnapshot.docs.map((x) => { return x.data() }));
            context.offers = querySnapshot.docs.map((x) => { return { id: x.id, ...x.data() } });
            // querySnapshot.forEach((doc) => {
            //     context.offers.push({ id: doc.id, ...doc.data() });
            // });
            this.loadPartials({
                'header': './templates/partials/header.hbs',
                'footer': './templates/partials/footer.hbs'
            }).then(function () {
                this.partial('./templates/home.hbs');
            })
        });


};
