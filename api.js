
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyB7vE-_CaCC6siAbsjhnIABuKHnc2_pL3k",
    authDomain: "vanlife-1eb22.firebaseapp.com",
    projectId: "vanlife-1eb22",
    storageBucket: "vanlife-1eb22.appspot.com",
    messagingSenderId: "527651427894",
    appId: "1:527651427894:web:35dc342339a84c53a22a97"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Refactoring the fetching functions



export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}