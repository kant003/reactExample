interface SaludadorProps {
    msg: string;
    saludos?: string[];
}
function Saludador({msg, saludos=[]}: SaludadorProps) {
  //  msg = msg.toUpperCase();
  //  saludos.push("Hola");
  console.log("Saludador:", msg);
  return (
    <div>Hola {msg} {saludos}</div>
  )
}

export default function Ejem8() {
    return <Saludador msg="Juan" />

}