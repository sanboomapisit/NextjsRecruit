import React from 'react'
import { HomeProps } from '../src/models'

export default function home({ movies, keeper }: HomeProps) {

    return (
        <div>
            <h1>หน้า Home {movies.name} {keeper.name}</h1>
            <img src="/favicon.ico" alt="image1" height={100} />
        </div>
    )
}
//ทุกครั้งที่ เรียกหน้านี้จะรัน  function นี้เสมอ ใน mode dev
//แต่ใน mode production มันจะรันครั้เดียวตอน build
export const getStaticProps = async () => {
    //สามารถเขียน server side code ได้ใน function นี้
    // ใช้ได้สำหรับไฟล์ใน folder pages เท่านั้น พวก component จะไช้ไม่ได้
    console.log('getStaticProps==>run')
    return {
        props: {
            movies: { name: "Apisit Srinuanpan" },
            keeper: { name: "Sorayut Hellowold" }
        }
    }
}