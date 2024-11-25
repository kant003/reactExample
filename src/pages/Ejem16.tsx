/*

*/


const nombres = ['naranja', 'limon', 'pera', 'manzana']

export default function Ejem16() {
  return <ul>
       {   nombres.map(fruta=><li key={fruta}>{fruta}</li>)   }
    </ul>
}
