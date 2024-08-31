'use client'

import {TEST} from "../../constants";

export default function RootLayout({children}) {
    console.log(TEST)
    return (
        <html>
        <head/>
        <body>{children}</body>
        </html>
    );
}
